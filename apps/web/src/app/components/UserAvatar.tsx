import Image from "next/image";

const users = {
  "Enes Tufekci": {
    name: "Enes Tufekci",
    avatarUrl: "enes2.png",
  },
  "Alina Lambert": {
    name: "Alina Lambert",
    avatarUrl: "alina.png",
  },
  "Ayla Gregowski": {
    name: "Ayla Gregowski",
    avatarUrl: "ayla.png",
  },
  "Celine Parr": {
    name: "Celine Parr",
    avatarUrl: "celine.png",
  },
  "Dave Schneider": {
    name: "Dave Schneider",
    avatarUrl: "dave.png",
  },
  "Jakob Frater": {
    name: "Jakob Frater",
    avatarUrl: "jakob.png",
  },
  "Michael Selkis": {
    name: "Michael Selkis",
    avatarUrl: "michael.png",
  },
  "Norah Scott": {
    name: "Norah Scott",
    avatarUrl: "norah.png",
  },
  celic: {
    name: "celic",
    avatarUrl: null,
  },
  hamitufekci: {
    name: "hamitufekci",
    avatarUrl: null,
  },
};

export type User = keyof typeof users;

interface UserAvatarProps {
  size: number;
  status?: "online" | "offline" | "busy";
  bgColor?: string;
  user?: User;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { user, size, bgColor } = props;
  const { avatarUrl } = users[user];

  return (
    <div
      style={{ "--size": `${size}px`, "--rounded": `${size / 6}px` }}
      className="w-[--size] h-[--size] rounded-[--rounded] overflow-hidden"
    >
      <Image
        alt=""
        src={`/media/${avatarUrl}`}
        width={size}
        height={size}
      ></Image>
    </div>
  );
};
