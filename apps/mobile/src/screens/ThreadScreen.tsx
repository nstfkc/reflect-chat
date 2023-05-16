import { Route } from "@/router/Route";
import { Link } from "react-router-dom";

export const ThreadScreen = () => {
  return (
    <Route
      path="/chat/:chatId/:messageId"
      renderTitle={() => {
        return <div>Thread page</div>;
      }}
    >
      <div className="bg-blue-200 h-full py-8">
        <div>Message Thread </div>
        <Link to="/chat/1234">Chat</Link>
      </div>
    </Route>
  );
};
