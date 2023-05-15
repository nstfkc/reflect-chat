import Mention from "@tiptap/extension-mention";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import suggestion from "./suggestion";

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        suggestion,
      }),
    ],
    content: `Hello world!`,
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <div>
        <button
          onClick={() => editor.chain().focus().sinkListItem("listItem").run()}
          disabled={!editor.can().sinkListItem("listItem")}
        >
          sinkListItem
        </button>
        <button
          onClick={() => editor.chain().focus().liftListItem("listItem").run()}
          disabled={!editor.can().liftListItem("listItem")}
        >
          liftListItem
        </button>{" "}
      </div>
      <div style={{ backgroundColor: "#EDEDED", padding: "16px" }}>
        <EditorContent style={{ minHeight: "100px" }} editor={editor} />
      </div>
    </div>
  );
};
