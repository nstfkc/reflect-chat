import * as Collapsible_ from "@radix-ui/react-collapsible";
import { PropsWithChildren, useContext } from "react";
import { IconsContext } from "shared";

interface CollapsibleProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  label: string;
}

export const Collapsible = (props: PropsWithChildren<CollapsibleProps>) => {
  const { onOpenChange, open, label, children } = props;
  const { icons } = useContext(IconsContext);
  return (
    <Collapsible_.Root
      className="w-full"
      open={open}
      onOpenChange={onOpenChange}
    >
      <Collapsible_.Trigger asChild>
        <button className="flex justify-between items-center w-full">
          <span className="">{label}</span>{" "}
          {open ? <icons.Minus /> : <icons.Plus />}
        </button>
      </Collapsible_.Trigger>

      <Collapsible_.Content>{children}</Collapsible_.Content>
    </Collapsible_.Root>
  );
};
