import { Channel, User, Message } from "@prisma/client";
import { TextEditor } from "shared";

type GetEditorProps =
  | {
      kind: "channel";
      channel: Channel;
      onUpdate: VoidFunction;
      sendMessage: (message: string) => void;
    }
  | {
      kind: "thread";
      message: Message;
      onUpdate: VoidFunction;
      sendMessage: (message: string) => void;
    }
  | {
      kind: "user";
      user: User;
      onUpdate: VoidFunction;
      sendMessage: (message: string) => void;
    };

export function getEditor(props: GetEditorProps) {
  const editors = new Map<number, () => JSX.Element>();
  if (props.kind === "channel") {
    if (!editors.has(props.channel.id)) {
      editors.set(props.channel.id, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            props.sendMessage(message);
          }}
          placeholder={`Message #${props.channel.name}`}
        />
      ));
    }
    return editors.get(props.channel.id);
  }

  if (props.kind === "thread") {
    if (!editors.has(props.message.id)) {
      editors.set(props.message.id, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            props.sendMessage(message);
          }}
          placeholder={`Reply...`}
        />
      ));
    }
    return editors.get(props.message.id);
  }

  if (props.kind === "user") {
    if (!editors.has(props.user.id)) {
      editors.set(props.user.id, () => (
        <TextEditor
          onUpdate={props.onUpdate}
          onSubmit={(message) => {
            props.sendMessage(message);
          }}
          placeholder={`Message ${(props.user as any).userProfile.username}`}
        />
      ));
    }
    return editors.get(props.user.id);
  }
}
