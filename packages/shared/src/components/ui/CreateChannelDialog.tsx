import { ComponentProps, FormEvent, useRef, useState } from "react";
import * as Switch from "@radix-ui/react-switch";
import { cx } from "class-variance-authority";
import { Channel } from "db";
import { useSocket } from "../context/SocketContext";
import { useMutation } from "../../api-client/useMutation";
import { useQuery } from "../../api-client/useQuery";

const PrivateSwitch = (props: ComponentProps<typeof Switch.Root>) => {
  return (
    <Switch.Root
      className={cx(
        "w-[48px] bg-blackA9 p-px",
        "rounded-full relative border-[2px] border-gray-800 shadow-blackA7 ",
        "focus:shadow-[0_0_0_1px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
      )}
      {...props}
    >
      <Switch.Thumb
        className={cx(
          "block w-[21px] h-[21px] rounded-full",
          "border-[2px] border-gray-800 transition-transform duration-100",
          "translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
        )}
      />
    </Switch.Root>
  );
};

interface CreateChannelFormProps {
  onSuccess: (channel: Channel) => void;
  userId: string;
}

export const CreateChannelForm = (props: CreateChannelFormProps) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [kind, setKind] = useState("Public");
  const [isLoading, setIsLoading] = useState(false);
  const { trigger } = useMutation("/channel/create");
  const { data, mutate } = useQuery("/channels");
  const { socket } = useSocket();
  const isFocused = useRef(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const channel = await trigger({
      name,
      description,
      kind,
      createdBy: props.userId,
    });

    if (channel) {
      props.onSuccess(channel);
      if (data) {
        socket?.emit("channel-created", channel);
        mutate([...data, channel]);
      }
    }

    setIsLoading(false);
    setName("");
    setDescription("");
    setKind("Public");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <fieldset className="flex flex-col">
            <label className="font-semibold text-sm" htmlFor="name">
              Name
            </label>
            <input
              className="w-full border-[1px] py-1 px-2 border-gray-800 rounded-md outline-none focus:shadow-[0_0_0_1px]"
              id="name"
              placeholder="e.g #marketing"
              value={name}
              onChange={(e) => setName(e.target.value)}
              ref={(el) => {
                if (!isFocused.current) {
                  el?.focus();
                  isFocused.current = true;
                }
              }}
            />
          </fieldset>
          <fieldset className="flex flex-col">
            <label className="font-semibold text-sm" htmlFor="name">
              Description (optional)
            </label>
            <textarea
              rows={2}
              className="resize-none w-full border-[1px] py-1 px-2 border-gray-800 rounded-md outline-none focus:shadow-[0_0_0_1px]"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </fieldset>
        </div>
        <div className="flex items-center">
          <div className="flex flex-col">
            <span className="font-bold">Make Private</span>
            <p>
              When a channel is set to private, it can only be viewed or joined
              by invitation.
            </p>
          </div>
          <div className="basis-1/3 flex justify-end">
            <PrivateSwitch
              checked={kind === "Private"}
              onCheckedChange={(s) => setKind(s ? "Private" : "Public")}
            ></PrivateSwitch>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            disabled={isLoading}
            type="submit"
            className="bg-black text-white px-4 py-2 rounded-lg"
          >
            Create
          </button>
        </div>
      </div>
    </form>
  );
};
