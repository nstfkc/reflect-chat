import * as Dialog from "@radix-ui/react-dialog";
import useSWRMutation from "swr/mutation";
import { ComponentProps, FormEvent, ReactNode, useState } from "react";
import { HiXMark } from "react-icons/hi2";
import * as Switch from "@radix-ui/react-switch";
import { cx } from "class-variance-authority";
import { useSocket } from "@/components/SocketContext/useSocket";
import { Channel } from "db";

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
          "block w-[21px] h-[21px] bg-white rounded-full",
          "border-[2px] border-gray-800 transition-transform duration-100",
          "translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]"
        )}
      />
    </Switch.Root>
  );
};

interface CreateChannelParams {
  name: string;
  description: string;
  kind: string;
  createdBy: string;
}
const createChannel = async (
  url: string,
  { arg }: { arg: CreateChannelParams }
): Promise<Channel> => {
  return await fetch(url, {
    method: "POST",
    body: JSON.stringify(arg),
  }).then((res) => res.json());
};

interface CreateChannelDialogProps {
  children: ReactNode;
  onChannelCreate: (channel: Channel) => void;
}

export const CreateChannelDialog = (props: CreateChannelDialogProps) => {
  const { children, onChannelCreate } = props;
  const { trigger } = useSWRMutation("/_api/create-channel", createChannel, {});
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [kind, setKind] = useState("Public");
  const [isLoading, setIsLoading] = useState(false);
  const { socket, user } = useSocket();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const channel = await trigger({
      name,
      description,
      kind,
      createdBy: user?.id,
    });
    socket?.emit("channel-created", channel);

    onChannelCreate(channel);

    setIsLoading(false);
    setName("");
    setDescription("");
    setKind("Public");
    setIsOpen(false);
  };

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(s) => setIsOpen(isLoading ? false : s)}
    >
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-gray-900/20 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
            Create a channel
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Channels are where your team communicates. They’re best when
            organized around a topic — #marketing, for example.
          </Dialog.Description>
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
                    When a channel is set to private, it can only be viewed or
                    joined by invitation.
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
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <HiXMark />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
