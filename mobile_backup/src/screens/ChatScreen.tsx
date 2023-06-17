import { RouteTitle, RouterParametersContext } from "@/router/Route";
import { useContext } from "react";
import { ChatHistory, useQuery } from "shared";
import { Haptics, ImpactStyle } from "@capacitor/haptics";
import { useLocation } from "react-router-dom";

/* const Title = () => {
 *   const { data = [] } = useQuery("listChannels");
 *   const { params } = useContext(RouterParametersContext);
 *
 *   const channel = data.find((channel) => channel.id === params.channelId);
 *
 *   if (!channel) {
 *     return null;
 *   }
 *
 *   return (
 *     <RouteTitle>
 *       <div className="p-4 font-semibold tracking-wide shadow-md">
 *         #{channel.name}
 *       </div>
 *     </RouteTitle>
 *   );
 * }; */

export const ChatScreen = () => {
  const { params } = useContext(RouterParametersContext);
  useLocation;
  return (
    <div className="h-full bg-white">
      <ChatHistory
        onMessageSend={() => {
          Haptics.impact({ style: ImpactStyle.Medium });
        }}
        channelId={params.channelId}
      />
    </div>
  );
};
