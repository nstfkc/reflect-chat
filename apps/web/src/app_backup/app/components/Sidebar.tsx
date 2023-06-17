"use client";

import Link from "next/link";
import { TbAt, TbBook } from "react-icons/tb";
import { DirectMessages } from "./DirectMessages";
import { Channels } from "./Channels";

const Text = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="text-sm font-semibold text-gray-700">{children}</span>
  );
};

export const Sidebar = () => {
  return (
    <div className="bg-white h-full overflow-scroll">
      <div className="p-4 flex flex-col gap-4">
        <div className="font-bold tracking-wider text-xl">ACME inc.</div>
        <hr />
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 items-center">
            <span className="text-lg">
              <TbAt />
            </span>
            <Text>Mentions & Reactions</Text>
          </div>
          <div className="flex gap-1 items-center">
            <span className="text-lg">
              <TbBook />
            </span>
            <Link href="/app">
              <Text>People</Text>
            </Link>
          </div>
        </div>
        <hr />

        <div className="flex flex-col gap-2">
          <span className="font-bold tracking-wide">Channels</span>
          <Channels />
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold tracking-wide">Direct Messages</span>
          <DirectMessages />
        </div>
      </div>
    </div>
  );
};
