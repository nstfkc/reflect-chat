import { Link, useHistory } from "react-router-dom";
import { Route } from "@/router/Route";
import { ChannelList } from "shared";

export const HomeScreen = () => {
  const { push } = useHistory();
  return (
    <Route path="/">
      <div className="bg-red-200 h-full">
        <div>Home </div>
        <div>
          <ChannelList
            onChannelClick={(channelId) => push(`/channel/${channelId}`)}
          />
        </div>
      </div>
    </Route>
  );
};
