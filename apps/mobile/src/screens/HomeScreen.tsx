import { Link } from "react-router-dom";
import { Route } from "@/router/Route";

export const HomeScreen = () => {
  return (
    <Route path="/">
      <div className="bg-red-200 h-full">
        <div>Home </div>
        <Link to="/chat/1234"># General</Link>
      </div>
    </Route>
  );
};
