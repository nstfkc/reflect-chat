import { Route } from "@/router/Route";
import { Link } from "react-router-dom";

export const ChatScreen = () => {
  return (
    <Route
      path="/chat/:chatId"
      renderTitle={() => {
        return <div>Chat screen</div>;
      }}
    >
      <div className="bg-blue-200 h-full py-8">
        <div>Chat </div>
        <Link to="/chat/1234/asdf">Chat</Link>
      </div>
    </Route>
  );
};
