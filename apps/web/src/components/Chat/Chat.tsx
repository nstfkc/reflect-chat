import { User, Media as MessageMedia } from "db";
import format from "date-fns/format";

import type { Media } from "@/components/Chat/FileUploader";
import { Fragment, ReactNode, useContext, useEffect, useRef } from "react";
import { HiOutlineDocumentText, HiUser } from "react-icons/hi2";
import { MessageContext } from "../MessageContext/MessageContext";
import { debounce } from "ts-debounce";
import { TextEditor } from "./TextEditor";
import { FileUploaderContext } from "./FileUploader";
import { RxImage } from "react-icons/rx";
import { MessageV1WithMedia } from "@/types/global";
import Image from "next/image";
import { HiOutlineCloudDownload } from "react-icons/hi";
import { groupItemsByCreatedAt, groupMessagesInTheSameMinute } from "./utils";

interface MediaWrapperProps {
  media: MessageMedia;
  children: ReactNode;
  onRender: (el: HTMLDivElement | null) => void;
}

const MediaWrapper = (props: MediaWrapperProps) => {
  const { media, children, onRender } = props;
  return (
    <div className="w-[400px] relative group py-2" ref={(el) => onRender(el)}>
      <div className="absolute w-full flex justify-end p-2 opacity-75 group-hover:opacity-100">
        <a
          href={`/media/${media.path}`}
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
  message: MessageV1WithMedia;
  markAsRead: (id: string) => void;
  markMentionsAsRead: (id: string) => void;
  onRender: (el: HTMLDivElement | null) => void;
}

const MessageFragment = (props: MessageFragmentProps) => {
  const { id, text, message, markAsRead, markMentionsAsRead, onRender } = props;
  const { updateLastSeenMessage } = useContext(MessageContext);

  useEffect(() => {
    /* updateLastSeenMessage(message); */
    markMentionsAsRead(message.id);
    markAsRead(message.id);
  }, [message]);

  return (
    <div>
      <div
        className="ProseMirror"
        dangerouslySetInnerHTML={{ __html: text }}
      ></div>

      <div className="">
        {(message.media ?? []).map((media, index) => {
          if (media.kind === "image") {
            const ratio = media.width / media.height;
            const height = Math.floor(400 / ratio);
            return (
              <MediaWrapper
                media={media}
                key={`${media.id}-${index}`}
                onRender={onRender}
              >
                <div className="bg-white rounded-lg flex gap-2 items-center overflow-hidden shadow-md">
                  <Image
                    alt="any"
                    width={400}
                    height={height}
                    src={`/media/${media.path}`}
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
    </div>
  );
};

interface MessageProps {
  messages: MessageV1WithMedia[];
  user: User;
  markAsRead: (id: string) => void;
  markMentionsAsRead: (id: string) => void;
  onRender: (el: HTMLElement | null) => void;
}

const MessageRender = (props: MessageProps) => {
  const { messages, user, markAsRead, onRender, markMentionsAsRead } = props;
  const hour = format(new Date(messages[0].createdAt), "h:mm a");

  return (
    <div className="flex items-start gap-2">
      <div className="flex">
        <div className="rounded-lg bg-gray-200 p-1 shadow-md">
          <HiUser
            className="text-2xl text-[--fill-color] saturate-50"
            style={{ "--fill-color": user?.profileColor } as any}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-2 items-start">
          <span className="font-bold mt-[-4px]">{user?.username}</span>
          <span className="text-sm  mt-[-3px] opacity-75">{hour}</span>
        </div>
        <div className="flex flex-col gap-1">
          {messages.map((message) => {
            return (
              <MessageFragment
                onRender={onRender}
                key={message.id}
                id={message.id}
                userId={user?.id}
                message={message}
                markAsRead={markAsRead}
                markMentionsAsRead={markMentionsAsRead}
                text={message.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

interface ChatProps {
  handleSendMessage: (text: string, media: Media[]) => void;
  messages: MessageV1WithMedia[];
  users: User[];
  name: string;
  markAsRead: (id: string) => void;
  markMentionsAsRead?: (id: string) => void;
  usersCanBeMentioned: User[];
}

export const Chat = (props: ChatProps) => {
  const {
    handleSendMessage,
    markAsRead,
    messages,
    users,
    name,
    usersCanBeMentioned,
    markMentionsAsRead = () => {},
  } = props;
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDragActive, getRootProps } = useContext(FileUploaderContext);

  const onRender = debounce((el: HTMLElement | null) => {
    setTimeout(() => {
      containerRef.current?.classList.remove("justify-end");
    });
    el?.scrollIntoView({ behavior: "auto" });
  });

  return (
    <div
      className="flex flex-col justify-end h-full relative"
      {...getRootProps()}
    >
      {isDragActive ? (
        <div className="absolute z-50 bg-gray-600/70 w-full h-full flex items-center justify-center">
          <div className="flex flex-col items-center">
            <RxImage className="text-4xl text-gray-100" />
            <span className="text-white font-semibold tracking-wide">
              Drag and drop files here
            </span>
          </div>
        </div>
      ) : null}
      <div
        className="flex flex-col gap-8 p-4 overflow-scroll justify-end"
        ref={containerRef}
      >
        {Object.entries(groupItemsByCreatedAt(messages as any)).map(
          ([date, messages]) => {
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

                    const user = users.find((user) => user.id === authorId);
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
          }
        )}
      </div>
      <div className="p-4">
        <TextEditor
          usersCanBeMentioned={usersCanBeMentioned}
          placeholder={`Message ${name}`}
          onSubmit={handleSendMessage}
        ></TextEditor>
      </div>
    </div>
  );
};
