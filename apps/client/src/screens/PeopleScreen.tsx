import { PeopleList } from "shared";
import { useNavigate } from "react-router-dom";

export const PeopleScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="p-4">
      <PeopleList
        onUserPress={(user) =>
          navigate(`/${user.publicId}`, { state: { user } })
        }
      ></PeopleList>
    </div>
  );
};
