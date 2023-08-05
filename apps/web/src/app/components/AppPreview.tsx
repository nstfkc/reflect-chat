import Image from "next/image";

import {
  TbCommand,
  TbHeadset,
  TbSearch,
  TbBooks,
  TbUsers,
  TbFiles,
  TbPencil,
} from "react-icons/tb";
import { UserAvatar } from "./UserAvatar";

const TitleBar = () => {
  return (
    <div className="rounded-t-xl bg-secondary px-2 py-1 flex justify-between">
      <div className="flex gap-2 h-full items-center">
        <div className="h-2 w-2 rounded-full bg-white/30"></div>
        <div className="h-2 w-2 rounded-full bg-white/30"></div>
        <div className="h-2 w-2 rounded-full bg-white/30"></div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white/30 text-[10px] px-2 py-[1px] rounded-lg flex items-center gap-4">
          <span className="flex gap-1 items-center opacity-75">
            <TbSearch /> Search
          </span>
          <span className="flex items-center bg-black/10 text-[8px] leading-relaxed px-1 rounded-md shadow-md">
            <TbCommand />
            +K
          </span>
        </div>
      </div>
      <div className="w-[40px] flex justify-end">
        <UserAvatar avatarUrl="/media/jakob.png" size={24} />
      </div>
    </div>
  );
};

const Channels = () => {
  return (
    <div>
      <span className="font-semibold text-xs px-2">Channels</span>
      <div className="flex flex-col gap-[1px] px-2">
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1 bg-black/10">
          # General
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1 ">
          <div className="flex justify-between items-center font-semibold">
            <span># Marketing</span>
            <span className="bg-black/30 rounded-sm text-alt2 w-[10px] h-[10px] leading-tight text-[8px] text-center font-semibold">
              2
            </span>
          </div>
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1 ">
          # Sales
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1 ">
          # Design
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1 ">
          # Development
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1 ">
          <div className="flex justify-between items-center font-semibold">
            <span># Releases</span>
            <span className="bg-black/30 text-alt2 rounded-sm w-[10px] leading-tight h-[10px] text-[8px] text-center font-semibold">
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DMs = () => {
  return (
    <div>
      <span className="font-semibold text-xs px-2">Direct Messages</span>
      <div className="flex flex-col gap-[1px] px-2">
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar avatarUrl="media/jakob.png" size={12} />
            <span>Jakob Frater (you)</span>
          </div>
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar avatarUrl="/media/enes2.png" size={12} />
            <span>Enes Tufekci</span>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar avatarUrl="/media/norah.png" size={12} />
            <span>Norah Scott</span>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar avatarUrl="/media/dave.png" size={12} />
            <span>Dave Schneider</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="bg-alt2 h-full py-1">
      <div className="px-2 py-1">
        <span className="font-bold">reflect</span>
      </div>
      <div className="px-2 text-[10px]">
        <div className="flex items-center gap-1">
          <TbHeadset /> <span>Personal assistant</span>
        </div>
        <div className="flex items-center gap-1">
          <TbBooks /> <span>Knowledge base</span>
        </div>
        <div className="flex items-center gap-1">
          <TbFiles /> <span>Files</span>
        </div>

        <div className="flex items-center gap-1">
          <TbUsers /> <span>People</span>
        </div>

        <div className="flex items-center gap-1">
          <TbPencil /> <span>Drafts</span>
        </div>
      </div>
      <div className="h-4"></div>
      <Channels />
      <div className="h-4"></div>
      <DMs />
    </div>
  );
};

const Message = () => {};

const MessageHistory = () => {
  return <div></div>;
};

const Main = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="bg-alt1 p-2 font-semibold text-xs"># General</div>
      <div className="flex-1 flex w-full">
        <div className="flex flex-1 h-full flex-col justify-end">
          <div>
            <MessageHistory />
          </div>
          <div className="p-2">
            <div className="bg-white/40 p-4 rounded-lg w-full">
              <span className="opacity-50 text-xs">Message #General</span>
            </div>
          </div>
        </div>
        <div className="flex shrink-0 h-full flex-col justify-end w-[32%] bg-alt2">
          <div>message history</div>
          <div className="p-2">
            <div className="bg-white/40 p-4 rounded-lg ">
              <span className="opacity-50 text-xs">Reply...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AppPreview = () => {
  return (
    <div className="h-full flex flex-col text-sm text-secondary select-none">
      <TitleBar />
      <div className="bg-primary h-full flex">
        <div className="w-[20%] min-w-[160px]">
          <SideBar />
        </div>
        <div className="flex-1">
          <Main />
        </div>
      </div>
    </div>
  );
};
