import { useContext } from "react";

import { useParams } from "react-router-dom";
import {
  ChatHistory,
  useQuery,
  useOrganisation,
  TextEditor,
  FileUploaderProvider,
  MessageContext,
  useUser,
  JSONContent,
} from "shared";

interface MessageRendererProps {
  content: JSONContent;
}

const MessageRendererFragment = ({
  content,
}: {
  content: JSONContent["content"];
}) => {
  if (!content) {
    return null;
  }

  return (
    <div className="ProseMirror">
      {content.map((c, index) => {
        switch (c.type) {
          case "paragraph":
            return <MessageRendererFragment key={index} content={c.content} />;
          case "text":
            return (
              <span
                className={`${c.marks
                  ?.map((mark) =>
                    mark.type === "bold"
                      ? "font-bold"
                      : mark.type === "italic"
                      ? "italic"
                      : mark.type === "strike"
                      ? "line-through"
                      : ""
                  )
                  .join(" ")}`}
              >
                {c.text}
              </span>
            );
          case "bulletList":
            return (
              <ul>
                <MessageRendererFragment key={index} content={c.content} />
              </ul>
            );
          case "listItem":
            return (
              <li>
                <MessageRendererFragment key={index} content={c.content} />
              </li>
            );
          default:
            return <pre>{JSON.stringify(c)}</pre>;
        }
      })}
    </div>
  );
};

const MessageRenderer = (props: MessageRendererProps) => {
  /* return <div>{JSON.stringify(props.content.content)}</div>; */
  return (
    <MessageRendererFragment
      content={props.content.content}
    ></MessageRendererFragment>
  );
};

export const ChatScreen = () => {
  const { channelId } = useParams();
  const { organisation } = useOrganisation();
  const { user } = useUser();
  const { sendMessage } = useContext(MessageContext);
  const { data: channels = [] } = useQuery("listChannels", {
    organisationId: organisation?.publicId!,
  });

  const channel = channels.find(({ id }) => id === channelId);
  if (!channel) {
    return null;
  }

  return (
    <div>
      <ChatHistory
        channel={channel as any}
        renderer={(message) => (
          <MessageRenderer
            key={message.id}
            content={JSON.parse(message.text)}
          ></MessageRenderer>
        )}
      />
      <FileUploaderProvider pathPrefix={(channel as any).id}>
        <TextEditor
          onSubmit={(message) => {
            sendMessage(
              {
                channelId: (channel as any).id,
                senderId: user?.publicId,
                text: message,
              },
              []
            );
          }}
          placeholder={(channel as any)?.name}
          usersCanBeMentioned={[]}
        />
      </FileUploaderProvider>
    </div>
  );
};
