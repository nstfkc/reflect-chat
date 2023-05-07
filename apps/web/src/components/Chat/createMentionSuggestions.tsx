import { ReactRenderer } from "@tiptap/react";
import tippy from "tippy.js";

import { MentionList } from "./MentionList";
import type { User } from "db";

interface CreateMentionSuggestionsProps {
  onStart: VoidFunction;
  onExit: VoidFunction;
  users: User[];
}

export const createMentionSuggestions = (
  params: CreateMentionSuggestionsProps
) => {
  return {
    items: ({ query }: { query: string }) => {
      return params.users
        .filter((item) =>
          item.username.toLowerCase().startsWith(query.toLowerCase())
        )
        .slice(0, 5);
    },

    render: () => {
      let component;
      let popup;

      return {
        onStart: (props) => {
          params.onStart();
          component = new ReactRenderer(MentionList, {
            props,
            editor: props.editor,
          });

          if (!props.clientRect) {
            return;
          }

          popup = tippy("body", {
            getReferenceClientRect: props.clientRect,
            appendTo: () => document.body,
            content: component.element,
            showOnCreate: true,
            interactive: true,
            trigger: "manual",
            placement: "bottom-start",
          });
        },

        onUpdate(props) {
          component.updateProps(props);

          if (!props.clientRect) {
            return;
          }

          popup[0].setProps({
            getReferenceClientRect: props.clientRect,
          });
        },

        onKeyDown(props) {
          if (props.event.key === "Escape") {
            popup[0].hide();

            return true;
          }

          return component.ref?.onKeyDown(props);
        },

        onExit() {
          params.onExit();
          popup[0]?.destroy();
          component?.destroy();
        },
      };
    },
  };
};
