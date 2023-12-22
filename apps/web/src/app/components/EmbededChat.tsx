"use client";

import { TbMessage2, TbX } from "react-icons/tb";

import { useState } from "react";

export const EmbededChat = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="fixed  bottom-16 right-4">
      {active ? (
        <div className="h-[500px] relative w-[300px] bg-white border-2 rounded-lg overflow-hidden shadow-md">
          <div className="absolute w-full h-[32px] px-1 flex justify-end items-center">
            <button
              className="w-[24px] h-[24px] flex justify-center items-center rounded-full bg-black/10"
              onClick={() => setActive(false)}
            >
              <TbX />
            </button>
          </div>
          <iframe
            height={500}
            src="http://localhost:3000/client/embeded/clqdt91rw0001q2j4i3dnv94t"
          ></iframe>
        </div>
      ) : (
        <button
          className="rounded-full bg-white shadow-md w-[84px] h-[84px] text-center font-bold text-sm"
          onClick={() => setActive(true)}
        >
          <div className="flex gap-1 items-center justify-center">
            <TbMessage2 className="text-xl" />
            Chat
          </div>
          <div>with us</div>
        </button>
      )}
    </div>
  );
};
