import Image from "next/image";

interface UserAvatarProps {
  avatarUrl: string;
  size: number;
  status?: "online" | "offline" | "busy";
  bgColor?: string;
}

export const UserAvatar = (props: UserAvatarProps) => {
  const { avatarUrl, size, status = "online" } = props;

  return (
    <div
      style={{ "--size": `${size}px`, "--rounded": `${size / 6}px` }}
      className="w-[--size] h-[--size] rounded-[--rounded] overflow-hidden"
    >
      <Image alt="" src={avatarUrl} width={size} height={size}></Image>
    </div>
  );
};
