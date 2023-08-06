"use client";
import { motion } from "framer-motion";
import { Feature } from "./Feature";
import { UserAvatar } from "../UserAvatar";

export const PeerToPeer = () => {
  return (
    <Feature
      reversed
      title="High-Quality Peer-to-Peer Audio and Video Calls"
      description="Bridge geographical gaps with crystal-clear audio and video calls that
          bring you closer to your colleagues. Whether it's a quick
          check-in or a detailed discussion, our high-quality calls ensure that
          every interaction is meaningful and productive."
    >
      <div className="flex items-center justify-center h-full">
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="w-[64px] rounded-md aspect-[4/3] border-2 border-secondary">
            <div className="w-[8px] mx-auto rounded-sm mt-[-3px] border-[2px] border-secondary"></div>
            <div className="flex h-full justify-center p-1">
              <div className="border-2 border-alt1 rounded-full w-[28px] h-[28px] animate-pulse">
                <div className="rounded-full w-[24px] h-[24px] overflow-hidden">
                  <UserAvatar size={24} user="Michael Selkis" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80px] border-[1.5px] mt-[-1px] rounded-[2px] border-secondary"></div>
        </div>
        <div className="flex flex-col flex-1 max-w-[128px] mx-[-8px] gap-2">
          <div className="h-1 bg-gray-700/60 relative overflow-hidden">
            <motion.div
              animate={{ left: "110%" }}
              initial={{ left: "-10%" }}
              transition={{
                duration: 0.85,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
              className="absolute w-2 h-2 top-[-2px] rounded-full bg-gray-700"
            ></motion.div>
          </div>

          <div className="h-1 bg-gray-700/60 relative overflow-hidden">
            <motion.div
              animate={{ left: "-10%" }}
              initial={{ left: "110%" }}
              transition={{
                duration: 0.8,
                repeatType: "loop",
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
              className="absolute w-2 h-2 top-[-2px] rounded-full bg-gray-700"
            ></motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center overflow-hidden">
          <div className="w-[64px] rounded-md aspect-[4/3] border-2 border-secondary">
            <div className="w-[8px] mx-auto rounded-sm mt-[-3px] border-[2px] border-secondary"></div>
            <div className="flex h-full justify-center p-1">
              <div className="border-2 border-alt1 rounded-full w-[28px] h-[28px] animate-pulse">
                <div className="rounded-full w-[24px] h-[24px] overflow-hidden">
                  <UserAvatar size={24} user="Alina Lambert" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[80px] border-[1.5px] mt-[-1px] rounded-[2px] border-secondary"></div>
        </div>
      </div>
    </Feature>
  );
};
