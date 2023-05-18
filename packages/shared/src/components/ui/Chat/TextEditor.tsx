"use client";

import { useContext, useEffect, useRef } from "react";

import { useEditor, EditorContent, Extension } from "@tiptap/react";
import type { Editor as EditorInstance } from "@tiptap/react";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import Mention from "@tiptap/extension-mention";
import {
  RxFontBold,
  RxFontItalic,
  RxLink1,
  RxListBullet,
  RxPaperPlane,
  RxStrikethrough,
  RxPlus,
  RxAlignLeft,
  RxAlignRight,
} from "react-icons/rx";

import { MdOutlineFormatListNumbered } from "react-icons/md";
import { useDropzone } from "react-dropzone";
import { cx } from "class-variance-authority";
import { createMentionSuggestions } from "./createMentionSuggestions";
import { User } from "@shared/types/global";
import { FileUploaderContext, RawMedia } from "./FileUploader";
import { UploadQueue } from "./UploadQueue";
import { TbIndentDecrease, TbIndentIncrease } from "react-icons/tb";

let shiftEnter = false;

const HandleEnter = (handlePressEnter: (editor: EditorInstance) => void) =>
  Extension.create({
    addKeyboardShortcuts(this) {
      return {
        "Shift-Enter": (editor) => {
          shiftEnter = true;
          editor.editor.commands.enter();
          shiftEnter = false;
          return true;
        },
        Enter: ({ editor }) => {
          /* if (!shiftEnter) {
           *   handlePressEnter(editor as any);
           *   shiftEnter = false;
           *   return true;
           * } */
          return false;
        },
      };
    },
  });

interface TextEditorProps {
  placeholder: string;
  onSubmit: (text: string, media: RawMedia[]) => void;
  usersCanBeMentioned: User[];
}

export const TextEditor = (props: TextEditorProps) => {
  const { placeholder, onSubmit, usersCanBeMentioned } = props;
  const { uploadQueue, clearUplaodQueue } = useContext(FileUploaderContext);

  const medias = Array.from(uploadQueue);
  const pendingMedias = useRef(medias.filter((media) => !media.uploaded));
  const uploadedMedias = useRef(medias.filter((media) => media.uploaded));

  useEffect(() => {
    pendingMedias.current = medias.filter((media) => !media.uploaded);
    uploadedMedias.current = medias.filter((media) => media.uploaded);
  }, [medias]);

  const handlePressEnter = (editor: EditorInstance) => {
    if (pendingMedias.current.length === 0) {
      onSubmit(editor.getHTML(), uploadedMedias.current);
      editor.commands.clearContent();
      clearUplaodQueue();
    }
  };

  const editor = useEditor({
    autofocus: false,
    editorProps: {
      attributes: {
        class: cx("outline-none resize-none outline-none transition py-2"),
      },
    },
    extensions: [
      StarterKit,
      Link.configure({
        validate: (href) => /^https?:\/\//.test(href),
        openOnClick: false,
      }),
      Mention.configure({
        HTMLAttributes: {
          class: "mention",
        },
        renderLabel({ node }) {
          return `@${node.attrs.label}`;
        },
        suggestion: createMentionSuggestions({
          users: usersCanBeMentioned,
          onExit: () => {
            shiftEnter = false;
          },
          onStart: () => {
            shiftEnter = true;
          },
        }),
      }),
      HandleEnter(handlePressEnter),
      Placeholder.configure({
        placeholder,
      }),
    ],
  });

  const buttonClass = "p-1 rounded-md text-lg text-gray-600";

  return (
    <div className="w-full bg-white flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <div className="flex gap-2 items-center">
          <button
            className={cx(
              buttonClass,
              editor?.isActive("bold") ? "bg-gray-200" : ""
            )}
            onClick={() => editor?.chain().focus().toggleBold().run()}
            disabled={!editor?.can().chain().focus().toggleBold().run()}
          >
            <RxFontBold />
          </button>
          <button
            className={cx(
              buttonClass,
              editor?.isActive("italic") ? "bg-gray-200" : ""
            )}
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            disabled={!editor?.can().chain().focus().toggleItalic().run()}
          >
            <RxFontItalic />
          </button>
          <button
            className={cx(
              buttonClass,
              editor?.isActive("strike") ? "bg-gray-200" : ""
            )}
            onClick={() => editor?.chain().focus().toggleStrike().run()}
            disabled={!editor?.can().chain().focus().toggleStrike().run()}
          >
            <RxStrikethrough></RxStrikethrough>
          </button>
        </div>
        <div className="border-l-[1px] border-gray-400"></div>
        <div className="flex gap-2 items-center ">
          <button className={cx(buttonClass)}>
            <RxLink1 />
          </button>
        </div>
        <div className="border-l-[1px] border-gray-400"></div>
        <div className="flex gap-2 items-center">
          <button
            className={cx(
              buttonClass,
              editor?.isActive("orderedList") ? "bg-gray-200" : ""
            )}
            onClick={(e) => {
              editor?.chain().focus().toggleOrderedList().run();
            }}
            disabled={!editor?.can().chain().focus().toggleOrderedList().run()}
          >
            <MdOutlineFormatListNumbered />
          </button>

          <button
            className={cx(
              buttonClass,
              editor?.isActive("bulletList") ? "bg-gray-200" : ""
            )}
            onClick={(e) => {
              editor?.chain().focus().toggleBulletList().run();
            }}
            disabled={!editor?.can().chain().focus().toggleBulletList().run()}
          >
            <RxListBullet />
          </button>
          <button
            className={cx(buttonClass)}
            onClick={() => {
              editor?.chain().focus().liftListItem("listItem").run();
            }}
          >
            <TbIndentDecrease />
          </button>
          <button
            className={cx(buttonClass)}
            onClick={() => {
              editor?.chain().focus().sinkListItem("listItem").run();
            }}
          >
            <TbIndentIncrease />
          </button>
        </div>
      </div>

      <EditorContent editor={editor} style={{ minHeight: "40px" }} />
      <UploadQueue />
      <div className="flex items-center justify-between">
        <UploadButton
          handleChange={() => {
            editor?.commands.focus();
          }}
        />
        <button
          className="bg-indigo-900/80 text-white  p-3 rounded-full"
          onClick={() => {
            handlePressEnter(editor!);
            editor?.commands.focus();
          }}
        >
          <RxPaperPlane />
        </button>
      </div>
    </div>
  );
};

interface UploadButtonProps {
  handleChange: VoidFunction;
}
const UploadButton = (props: UploadButtonProps) => {
  const { onFileInput } = useContext(FileUploaderContext);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (p) => {
      props.handleChange();
      onFileInput(p);
    },
    noDrag: true,
  });

  return (
    <button {...getRootProps()} className="bg-green-900/30 p-2 rounded-full">
      <input {...getInputProps()} />
      <RxPlus className="text-xl" />
    </button>
  );
};
