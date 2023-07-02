import { Editor } from "@tiptap/core";
import Mention from "@tiptap/extension-mention";
import StarterKit from "@tiptap/starter-kit";

const globalState = new Map<string, any>();

function createMentionSuggestions(params: any) {
  return {
    items: ({ query }: { query: string }) => {
      return globalState
        .get("mentionList")
        .filter((item: any) =>
          item.name.toLowerCase().startsWith(query.toLowerCase())
        )
        .slice(0, 5);
    },
    render: () => {
      return {
        onExit: (props: any) => {
          sendMessageFromWebView({
            kind: "mentionListUpdated",
            payload: { isActive: false, items: [] },
          });

          globalState.set("mentionHandler", null);
        },
        onStart: (props: any) => {
          sendMessageFromWebView({
            kind: "mentionListUpdated",
            payload: {
              isActive: true,
              items: props.items,
              label: "onStart",
              props: Object.keys(props),
            } as any,
          });

          globalState.set("mentionHandler", (data: any) => {
            props.command(data);
          });
        },
        onUpdate: (props: any) => {
          sendMessageFromWebView({
            kind: "mentionListUpdated",
            payload: { isActive: true, items: props.items },
          });
        },
        onEnd: (props: any) => {
          sendMessageFromWebView({
            kind: "mentionListUpdated",
            payload: { isActive: false, items: [] },
          });

          globalState.set("mentionHandler", null);
        },
      };
    },
  };
}

export type EditorState = {
  content: string;
  canBold: boolean;
  canItalic: boolean;
  canStrike: boolean;
  canSinkListItem: boolean;
  canLiftListItem: boolean;
  isBulletListActive: boolean;
  isBoldActive: boolean;
  isItalicActive: boolean;
  isStrikeActive: boolean;
};

export type WebViewMessage =
  | {
      kind: "editorStateUpdate";
      payload: EditorState;
    }
  | { kind: "editorInitialised" }
  | { kind: "debug"; payload: any }
  | {
      kind: "mentionListUpdated";
      payload: { isActive: boolean; items: any[] };
    };

function sendMessageFromWebView(params: WebViewMessage) {
  (window as any).ReactNativeWebView?.postMessage(JSON.stringify(params));
}

function getEditorState(editor: Editor): EditorState {
  return {
    content: JSON.stringify(editor.getJSON().content),
    canBold: editor.can().chain().focus().toggleBold().run(),
    canItalic: editor.can().chain().focus().toggleItalic().run(),
    canStrike: editor.can().chain().focus().toggleStrike().run(),
    canSinkListItem: editor.can().sinkListItem("listItem"),
    canLiftListItem: editor.can().liftListItem("listItem"),
    isBulletListActive: editor.isActive("bulletList"),
    isBoldActive: editor.isActive("bold"),
    isItalicActive: editor.isActive("italic"),
    isStrikeActive: editor.isActive("strike"),
  };
}

const editor = new Editor({
  element: document.getElementById("editor")!,
  extensions: [
    StarterKit,
    Mention.configure({
      HTMLAttributes: {
        class: "mention",
      },
      renderLabel({ node }) {
        return `@${node.attrs.label}`;
      },
      suggestion: createMentionSuggestions({}),
    }),
  ],
  onCreate: () => {
    sendMessageFromWebView({ kind: "editorInitialised" });
  },
  onSelectionUpdate: ({ editor }) => {
    sendMessageFromWebView({
      kind: "editorStateUpdate",
      payload: getEditorState(editor),
    });
  },
  onUpdate: ({ editor }) => {
    sendMessageFromWebView({
      kind: "editorStateUpdate",
      payload: getEditorState(editor),
    });
  },
});

type EditorAction =
  | "toggleBold"
  | "toggleItalic"
  | "toggleStrike"
  | "toggleListItem"
  | "sinkListItem"
  | "liftListItem";

const editorActions: Record<EditorAction, VoidFunction> = {
  liftListItem: () => editor.chain().focus().liftListItem("listItem").run(),
  sinkListItem: () => editor.chain().focus().sinkListItem("listItem").run(),
  toggleListItem: () => editor.chain().focus().toggleBulletList().run(),
  toggleBold: () => editor.chain().focus().toggleBold().run(),
  toggleItalic: () => editor.chain().focus().toggleItalic().run(),
  toggleStrike: () => editor.chain().focus().toggleStrike().run(),
};

export type NativeMessage =
  | { kind: "action"; payload: EditorAction }
  | { kind: "editor"; payload: "focus" | "blur" }
  | { kind: "initialContent"; payload: string }
  | { kind: "mentionListUpdate"; payload: any[] }
  | { kind: "mentionSelected"; payload: any };

window.addEventListener("message", (message: { data: string }) => {
  const nativeMessage: NativeMessage = JSON.parse(message.data);
  if (nativeMessage.kind === "action") {
    const fn = editorActions[nativeMessage.payload];
    fn();
  }
  if (nativeMessage.kind === "initialContent") {
    editor.commands.setContent(nativeMessage.payload);
    sendMessageFromWebView({ kind: "debug", payload: nativeMessage.payload });
  }
  if (nativeMessage.kind === "editor") {
    if (nativeMessage.payload === "focus") {
      editor.commands.focus();
    }
    if (nativeMessage.payload === "blur") {
      editor.commands.blur();
    }
  }
  if (nativeMessage.kind === "mentionListUpdate") {
    globalState.set("mentionList", nativeMessage.payload);
    sendMessageFromWebView({ kind: "debug", payload: nativeMessage.payload });
  }

  if (nativeMessage.kind === "mentionSelected") {
    const handler = (() => globalState.get("mentionHandler"))();
    if (!handler) {
      sendMessageFromWebView({ kind: "debug", payload: "Handler is null" });
    } else {
      handler(nativeMessage.payload);
    }
  }
});
