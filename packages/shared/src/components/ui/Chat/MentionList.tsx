import { cx } from "class-variance-authority";
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import { User } from "db";
import { ConfigContext } from "../../context/ConfigContext";

interface MentionListProps {
  items: User[];
  command: ({ id }: any) => void;
}
export const MentionList = forwardRef<any, MentionListProps>((props, ref) => {
  const { assetsServiceUrl } = useContext(ConfigContext);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item.id, label: item.name });
    }
  };

  const upHandler = () => {
    setSelectedIndex(
      (selectedIndex + props.items.length - 1) % props.items.length
    );
  };

  const downHandler = () => {
    setSelectedIndex((selectedIndex + 1) % props.items.length);
  };

  const enterHandler = () => {
    selectItem(selectedIndex);
  };

  useEffect(() => setSelectedIndex(0), [props.items]);

  useImperativeHandle(ref, () => ({
    onKeyDown: ({ event }: any) => {
      if (event.key === "ArrowUp") {
        upHandler();
        return true;
      }

      if (event.key === "ArrowDown") {
        downHandler();
        return true;
      }

      if (event.key === "Enter") {
        enterHandler();
        return true;
      }

      return false;
    },
  }));

  return (
    <ul className="bg-red-50 shadow-md rounded-lg overflow-hidden">
      {props.items.length ? (
        props.items.map((item, index) => (
          <li key={index}>
            <button
              className={cx(
                "px-4 py-2 w-full text-left flex items-center gap-3",
                index === selectedIndex ? "bg-black/10" : ""
              )}
              onClick={() => selectItem(index)}
            >
              <div
                style={{
                  backgroundColor: (item as any).userProfile?.profileColor,
                }}
                className="w-[24px] h-[24px] rounded-md overflow-hidden"
              >
                <img
                  src={[
                    assetsServiceUrl,
                    (item as any).userProfile.profilePictureUrl,
                  ].join("/")}
                  alt=""
                />
              </div>
              <span>{item.name}</span>
            </button>
          </li>
        ))
      ) : (
        <div className="item bg-red-50 p-4">No result</div>
      )}
    </ul>
  );
});

MentionList.displayName = "MentionList";
