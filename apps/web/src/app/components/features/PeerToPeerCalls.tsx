"use client";
import { motion } from "framer-motion";

export const PeerToPeerCalls = () => {
  return (
    <div>
      <div>
        <h3 className="font-black text-xl tracking-wider">
          Peer-to-Peer Audio and video calls
        </h3>
        <p>
          Sometimes it is just better to hop into a call, reflect allows you to
          make peer-to-peer audio and video calls with close to 0 latency.
        </p>
      </div>

      <div className="h-8"></div>
      <div className="border-2 border-gray-700 rounded-lg p-8 py-32">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center">
            <div className="w-[84px] h-[60px] rounded-md border-2 border-gray-700 bg-red-600/20"></div>
            <div className="w-[100px] h-[2px] bg-gray-700"></div>
          </div>
          <div className="flex flex-col flex-1 mx-[-8px] gap-2">
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
          <div className="flex flex-col items-center">
            <div className="w-[84px] h-[60px] rounded-md border-2 border-gray-700 bg-green-600/20"></div>
            <div className="w-[100px] h-[2px] bg-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
