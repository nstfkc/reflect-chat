"use client";

import { useAnimate, motion } from "framer-motion";

import {
  TbCommand,
  TbHeadset,
  TbSearch,
  TbBooks,
  TbUsers,
  TbFiles,
  TbPencil,
  TbMenu,
} from "react-icons/tb";
import { UserAvatar } from "./UserAvatar";
import { GeneralChat } from "./mockConversations";
import { useEffect } from "react";

const TitleBar = () => {
  return (
    <div className="rounded-t-xl bg-secondary px-2 py-1 flex justify-between">
      <div className="hidden md:flex gap-2 h-full items-center">
        <div className="h-2 w-2 rounded-full bg-white/30"></div>
        <div className="h-2 w-2 rounded-full bg-white/30"></div>
        <div className="h-2 w-2 rounded-full bg-white/30"></div>
      </div>
      <div className="md:hidden w-[40px] flex items-center">
        <TbMenu className="text-white/40" />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="bg-white/30 text-[10px] px-2 py-[1px] w-full sm:w-auto min-w-[200px] justify-between rounded-lg flex items-center gap-8">
          <span className="flex gap-1 items-center opacity-75">
            <TbSearch /> Search
          </span>
          <span className="hidden md:flex items-center bg-black/10 text-[8px] leading-relaxed px-1 rounded-md shadow-md">
            <TbCommand />
            +K
          </span>
        </div>
      </div>
      <div className="w-[40px] flex justify-end">
        <UserAvatar user="Jakob Frater" size={24} />
      </div>
    </div>
  );
};

const channels = [
  { name: "General", isActive: true, badges: 0 },
  { name: "Marketing", isActive: false, badges: 2 },
  { name: "Sales", isActive: false, badges: 1 },
  { name: "Design", isActive: false, badges: 0 },
  { name: "Development", isActive: false, badges: 0 },
  { name: "Releases", isActive: false, badges: 4 },
];

const Channels = () => {
  return (
    <div>
      <span className="font-semibold text-xs px-2">Channels</span>
      <div className="flex flex-col gap-[1px] px-2">
        {channels.map((channel) => (
          <div
            key={channel.name}
            className={[
              "text-[10px] leading-relaxed py-[2px] rounded-md px-1",
              channel.isActive ? "bg-black/10" : "",
            ].join(" ")}
          >
            <div
              className={[
                "flex justify-between items-center",
                channel.badges > 0 ? "font-semibold" : "",
              ].join(" ")}
            >
              <span># {channel.name}</span>
              {channel.badges > 0 ? (
                <span className="bg-black/30 rounded-sm text-alt2 w-[10px] h-[10px] leading-tight text-[8px] text-center font-semibold">
                  {channel.badges}
                </span>
              ) : null}
            </div>
          </div>
        ))}
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
            <UserAvatar user="Jakob Frater" size={12} />
            <span>Jakob Frater (you)</span>
          </div>
        </div>
        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar user="Enes Tufekci" size={12} />
            <span>Enes Tufekci</span>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar user="Norah Scott" size={12} />
            <span>Norah Scott</span>
          </div>
        </div>

        <div className="text-[10px] leading-relaxed py-[2px] rounded-sm px-1">
          <div className="flex items-center gap-1">
            <UserAvatar user="Dave Schneider" size={12} />
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

const MessageHistory = () => {
  return (
    <div className="flex flex-col gap-2">
      <GeneralChat />
    </div>
  );
};

const Thread = () => {
  return (
    <div className="hidden lg:flex shrink-0 h-full flex-col justify-end w-[36%] bg-alt2">
      <div>message history</div>
      <div className="p-2">
        <div className="bg-white/40 p-4 rounded-lg ">
          <span className="opacity-50 text-xs">Reply...</span>
        </div>
      </div>
    </div>
  );
};
const Main = () => {
  return (
    <div className="flex h-full">
      <div className="flex flex-col w-full h-full">
        <div className="bg-alt1 p-2 font-semibold text-xs"># General</div>
        <div className="flex flex-1 h-full flex-col justify-end">
          <MessageHistory />
          <div className="p-2">
            <div className="bg-white/40 p-4 rounded-lg w-full">
              <span className="opacity-50 text-xs">Message #General</span>
            </div>
          </div>
        </div>
      </div>
      <Thread />
    </div>
  );
};

export const AppPreview = () => {
  const [sidebarAnimation, animateSideBar] = useAnimate();
  useEffect(() => {
    if (window.innerWidth < 500) {
      animateSideBar(
        sidebarAnimation.current,
        { left: 0 },
        { duration: 0.3, stiffness: 1, delay: 2 }
      ).then(() => {
        animateSideBar(
          sidebarAnimation.current,
          { left: "-100%" },
          { duration: 0.3, delay: 2 }
        );
      });
    }
  }, [animateSideBar, sidebarAnimation]);

  return (
    <div
      className={[
        "aspect-[9/16] sm:aspect-[5/4] md:aspect-[5/3]",
        "translate-y-24",
        "mt-[-102px]",
        "rounded-xl",
        "shadow-xl",
        "overflow-hidden",
        "border-primary/10",
        "border-opacity-25",
        "border-[1px]",
      ].join(" ")}
    >
      <div className="h-full flex flex-col text-sm text-secondary select-none">
        <TitleBar />
        <div className="bg-primary h-full flex relative">
          <div
            ref={sidebarAnimation}
            style={{ left: "0" }}
            className="md:hidden fixed h-screen w-full z-10"
          >
            <SideBar />
          </div>
          <div className="hidden md:block w-[20%] z-10 min-w-[160px]">
            <SideBar />
          </div>
          <div className="flex-1">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};
