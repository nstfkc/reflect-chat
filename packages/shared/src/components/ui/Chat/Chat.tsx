import { Media as MessageMedia, User } from "db";
import format from "date-fns/format";
import { Virtuoso, VirtuosoHandle } from "react-virtuoso";

import type { RawMedia } from "./FileUploader";
import {
  Fragment,
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react";
import { HiOutlineDocumentText, HiUser } from "react-icons/hi2";
import { ConfigContext } from "../../context/ConfigContext";

import { debounce } from "ts-debounce";
import { TextEditor } from "./TextEditor";
import { FileUploaderContext } from "./FileUploader";
import { RxImage } from "react-icons/rx";
import { MessageWithMedia } from "../../../types/global";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { groupItemsByCreatedAt, groupMessagesInTheSameMinute } from "./utils";

interface MediaWrapperProps {
  media: MessageMedia;
  children: ReactNode;
  onRender: (el: HTMLDivElement | null) => void;
}

const MediaWrapper = (props: MediaWrapperProps) => {
  const { media, children, onRender } = props;
  const { assetsServiceUrl } = useContext(ConfigContext);
  return (
    <div className="w-[200px] relative group py-2" ref={(el) => onRender(el)}>
      <div className="absolute w-full flex justify-end p-2 opacity-75 group-hover:opacity-100">
        <a
          href={`${assetsServiceUrl}/${media.path}`}
          download={media.filename}
          className="bg-gray-900/10 rounded-lg p-2"
        >
          <HiOutlineCloudDownload className="text-xl" />
        </a>
      </div>
      {children}
    </div>
  );
};

interface MessageFragmentProps {
  text: string;
  id: string;
  userId: string;
  message: MessageWithMedia;
  markAsRead: (id: string) => void;
  markMentionsAsRead: (id: string) => void;
  onRender: (el: HTMLDivElement | null) => void;
}

const MessageFragment = (props: MessageFragmentProps) => {
  const { text, message, markAsRead, markMentionsAsRead, onRender } = props;
  /* const { updateLastSeenMessage } = useContext(MessageContext); */
  const { assetsServiceUrl } = useContext(ConfigContext);

  useEffect(() => {
    /* updateLastSeenMessage(message); */
    markMentionsAsRead(message.id);
    markAsRead(message.id);
  }, [message, markAsRead, markMentionsAsRead]);

  return (
    <li
      ref={(el) => {
        onRender(el as any);
      }}
    >
      <div
        className="ProseMirror"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>

      <div className="">
        {(message.media ?? []).map((media, index) => {
          if (media.kind === "image") {
            const ratio = media.width / media.height;
            const height = Math.floor(200 / ratio);
            return (
              <MediaWrapper
                media={media}
                key={`${media.id}-${index}`}
                onRender={onRender}
              >
                <div className="rounded-lg flex gap-2 items-center overflow-hidden shadow-md">
                  {/* eslint-disable-next-line  */}
                  <img
                    alt="any"
                    width={200}
                    height={height}
                    src={`${assetsServiceUrl}/${media.path}`}
                  />
                </div>
              </MediaWrapper>
            );
          } else {
            return (
              <MediaWrapper
                media={media}
                key={`${media.id}-${index}`}
                onRender={onRender}
              >
                <div className="bg-white rounded-lg flex gap-2 items-center overflow-hidden shadow-md p-4">
                  <HiOutlineDocumentText className="text-2xl" />
                  <span className="text-sm tracking-wide">
                    {media.filename}
                  </span>
                </div>
              </MediaWrapper>
            );
          }
        })}
      </div>
    </li>
  );
};

interface MessageProps {
  messages: MessageWithMedia[];
  user: User;
  markAsRead: (id: string) => void;
  markMentionsAsRead: (id: string) => void;
  onRender: (el: HTMLElement | null) => void;
}

const MessageRender = (props: MessageProps) => {
  const { messages, user, markAsRead, onRender, markMentionsAsRead } = props;
  const hour = format(new Date(messages[0].createdAt), "h:mm a");

  return (
    <li className="px-4 py-2 flex items-start gap-2">
      <div className="flex">
        <div className="rounded-lg bg-gray-200 p-1 shadow-md">
          <HiUser
            className="text-2xl text-[--fill-color] saturate-50"
            style={{ "--fill-color": "red" } as any}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-start">
          <span className="font-bold mt-[-4px]">{user?.name}</span>
          <span className="text-sm  mt-[-3px] opacity-75">{hour}</span>
        </div>
        <ul className=" gap-1">
          {messages.map((message) => {
            return (
              <MessageFragment
                onRender={onRender}
                key={message.id}
                id={message.id}
                userId={user?.publicId}
                message={message}
                markAsRead={markAsRead}
                markMentionsAsRead={markMentionsAsRead}
                text={message.text}
              />
            );
          })}
        </ul>
      </div>
    </li>
  );
};

interface ChatProps {
  /* handleSendMessage: (text: string, media: RawMedia[]) => void; */
  messages: MessageWithMedia[];
  users: User[];
  markAsRead: (id: string) => void;
  markMentionsAsRead?: (id: string) => void;
  /* usersCanBeMentioned: User[]; */
}

export const Chat = (props: ChatProps) => {
  const {
    /* handleSendMessage, */
    markAsRead,
    messages,
    users,
    /* usersCanBeMentioned, */
    markMentionsAsRead = () => {},
    /* name, */
  } = props;
  /* const { isDragActive, getRootProps } = useContext(FileUploaderContext); */
  const virtuoso = useRef<VirtuosoHandle>(null);
  const container = useRef<HTMLDivElement>(null);

  const data = Object.entries(groupItemsByCreatedAt(messages));

  const resizeObserver = useMemo(
    () =>
      new ResizeObserver(() => {
        virtuoso?.current?.scrollTo({ top: 99999 });
      }),
    []
  );

  const onRender = debounce((_el: HTMLElement | null) => {
    /* el?.scrollIntoView({ behavior: "auto" }); */
  });

  useLayoutEffect(() => {
    virtuoso?.current?.scrollToIndex({
      index: data.length - 1,
      align: "end",
      behavior: "auto",
    });
  });

  useEffect(() => {
    resizeObserver.observe(container?.current!);
  }, [resizeObserver]);

  return (
    <>
      <div className="relative h-full">
        <div
          ref={container}
          className="gap-8 overflow-scroll"
          style={{ height: "100%" }}
        >
          <Virtuoso
            ref={virtuoso}
            data={data}
            style={{ height: "100%" }}
            alignToBottom={true}
            followOutput={true}
            itemContent={(_, [date, messages]) => {
              return (
                <Fragment key={date}>
                  <div className="w-full flex w-full justify-center items-center opacity-75">
                    <div className="border-b-[1px] border-gray-600/50 grow"></div>
                    <div className="border-[1px] border-gray-600/50 rounded-full px-4 py-2 text-sm">
                      {date}
                    </div>

                    <div className="border-b-[1px] border-gray-600/50 grow"></div>
                  </div>
                  {Object.values(groupMessagesInTheSameMinute(messages)).map(
                    (messages) => {
                      const authorId = messages[0].senderId;

                      const user = users?.find(
                        (user) => user?.publicId === authorId
                      );
                      return (
                        <MessageRender
                          onRender={onRender}
                          user={user!}
                          messages={messages as any}
                          key={messages[0].id}
                          markAsRead={markAsRead}
                          markMentionsAsRead={markMentionsAsRead}
                        />
                      );
                    }
                  )}
                </Fragment>
              );
            }}
          />
        </div>
      </div>
      {/* <div className="w-full border-t-2 border-black bg-gray-100/50">
          <TextEditor
          usersCanBeMentioned={usersCanBeMentioned}
          placeholder={`Message ${name}`}
          onSubmit={handleSendMessage}
          ></TextEditor>
          </div> */}
    </>
  );
};
