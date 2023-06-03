import { createGesture } from "@ionic/react";
import { useAnimate } from "framer-motion";
import { useCallback, useContext, useEffect, useRef } from "react";
import {
  ChatHistory,
  MessageContext,
  MessageProvider,
  OrganisationSelectScreen,
  useQuery,
} from "shared";
import { useOrganisation, useUser } from "shared/src/auth";
import { SafeAreaView } from "./SafeAreaView";
import { useNavigate, useParams } from "react-router-dom";
import {
  FileUploaderProvider,
  RawMedia,
} from "shared/src/components/ui/Chat/FileUploader";
import { TextEditor } from "shared/src/components/ui/Chat/TextEditor";
import { Chat } from "shared/src/components/ui/Chat/Chat";

interface ChannelsProps {
  onSelect: (channelId: string) => void;
}

const Channels = (props: ChannelsProps) => {
  const { organisation } = useOrganisation();
  const { data, isLoading } = useQuery("listChannels", {
    organisationId: organisation?.publicId,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div>Channels</div>
      <ul>
        {data?.map((channel) => {
          return (
            <li key={channel.id}>
              <button onClick={() => props.onSelect(channel.id)}>
                {channel.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const ChatScreen = () => {
  const { channelId } = useParams();
  const { sendMessage, getMessageHistoryById, markMentionsAsRead } =
    useContext(MessageContext);
  const { organisation } = useOrganisation();
  const { user } = useUser();
  const { data: users } = useQuery("listUsers", {
    organisationId: organisation?.publicId,
  });

  const { data: history = [] } = useQuery("listMessages", { channelId });

  const { data: channels } = useQuery("listChannels", {
    organisationId: organisation?.publicId,
  });

  const channel = channels?.find((c) => c.id === channelId)!;

  if (!channel) {
    return null;
  }

  const handleSendMessage = (text: string, medias?: RawMedia[]) => {
    /* onMessageSend(); */
    sendMessage(
      {
        senderId: user.publicId,
        channelId: channelId,
        text,
      },
      medias ?? []
    );
  };

  const messages = [...history, ...getMessageHistoryById(channelId)];
  return (
    <FileUploaderProvider pathPrefix={channelId}>
      <div className="flex flex-col h-full">
        <Chat
          messages={messages as any}
          users={users}
          markAsRead={() => {}}
          markMentionsAsRead={markMentionsAsRead(channelId)}
        />
        <ChatHistory channelId={channelId} onMessageSend={() => {}} />
        <div className="w-full border-t-2 border-black bg-gray-100/50">
          <TextEditor
            onSubmit={handleSendMessage}
            placeholder=""
            usersCanBeMentioned={[]}
          />
        </div>
      </div>
    </FileUploaderProvider>
  );
};

export const HomeScreen = () => {
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const containerRef = useRef<HTMLDivElement>(null);
  const slots = ["orgs", "channels"];
  const navigate = useNavigate();
  const { channelId } = useParams();

  const currentSlot = useRef(channelId ? 2 : 1);
  const complete = useCallback(
    (onComplete?: VoidFunction) =>
      animate(
        scope.current,
        { left: currentSlot.current * window.innerWidth * -1 },
        {
          type: "tween",
          duration: 0.1,
          onComplete: () => {
            if (onComplete) {
              onComplete();
            }
          },
        }
      ),
    [animate, scope]
  );

  const gestureInit = useCallback(() => {
    const container = containerRef.current;
    if (container) {
      const gesture = createGesture({
        gestureName: "gesture",
        el: container,
        onStart: () => {},
        onMove: (details) => {
          const currentLeft = window.innerWidth * currentSlot.current;
          const delta = details.currentX - details.startX - currentLeft;
          const maxLeft = scope.current.clientWidth;

          animate(
            scope.current,
            { left: Math.min(0, Math.max(-maxLeft, delta)) },
            { duration: 0 }
          );
        },
        onEnd: (details) => {
          const delta = details.currentX - details.startX;

          if (delta * -1 > window.innerWidth / 2) {
            currentSlot.current = Math.min(
              currentSlot.current + 1,
              slots.length
            );
          }

          if (delta > window.innerWidth / 2) {
            currentSlot.current = Math.max(0, currentSlot.current - 1);
          }

          complete();
        },
      });

      gesture.enable();
      return gesture;
    }
    return null;
  }, [animate, scope, slots.length, complete]);

  useEffect(() => {
    const gesture = gestureInit();
    return () => {
      gesture?.destroy();
    };
  }, [gestureInit]);

  return (
    <MessageProvider>
      <div
        ref={containerRef}
        className="relative w-screen h-screen overflow-hidden"
      >
        <div
          ref={scope}
          className="absolute flex z-[100] bg-white"
          style={{ left: `${window.innerWidth * currentSlot.current * -1}px` }}
        >
          <SafeAreaView>
            <OrganisationSelectScreen
              onSelect={() => {
                currentSlot.current = 1;
                complete(() => {
                  navigate("/");
                });
              }}
            />
          </SafeAreaView>
          <SafeAreaView>
            <Channels
              onSelect={(channelId) => {
                currentSlot.current = 2;
                complete(() => {
                  navigate(`/${channelId}`);
                });
              }}
            />
          </SafeAreaView>
        </div>
        <SafeAreaView className="z-[10]">
          <ChatScreen />
        </SafeAreaView>
      </div>
    </MessageProvider>
  );
};
