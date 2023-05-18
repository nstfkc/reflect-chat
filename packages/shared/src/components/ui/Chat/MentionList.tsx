import { User } from "@shared/types/global";
import { cx } from "class-variance-authority";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";

interface MentionListProps {
  items: User[];
  command: ({ id }: any) => void;
}
export const MentionList = forwardRef<any, MentionListProps>((props, ref) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectItem = (index: number) => {
    const item = props.items[index];

    if (item) {
      props.command({ id: item.id, label: item.username });
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
    <ul className="bg-white shadow-md rounded-lg">
      {props.items.length ? (
        props.items.map((item, index) => (
          <li key={index}>
            <button
              className={cx(
                "px-4 py-2 w-full text-left",
                index === selectedIndex ? "bg-gray-100" : ""
              )}
              onClick={() => selectItem(index)}
            >
              {item.username}
            </button>
          </li>
        ))
      ) : (
        <div className="item">No result</div>
      )}
    </ul>
  );
});

MentionList.displayName = "MentionList";
