import { Feature } from "./Feature";
import {
  TbArrowForward,
  TbCalendar,
  TbChecklist,
  TbDownload,
  TbHeadset,
  TbZip,
} from "react-icons/tb";

export const AIPoweredSearch = () => {
  return (
    <Feature
      reversed
      title="AI-Powered Personal Assistant"
      description="Meet your virtual productivity partner. Our AI assistant seamlessly
          integrates into your workflow, handling routine tasks, and even
          offering smart suggestions based on your preferences and work
          patterns. It's like having a reliable co-pilot for your daily
          activities."
    >
      <div className="p-4">
        <div className="flex gap-2">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-md">
            <TbHeadset className="text-lg opacity-75" />
          </div>
          <div>
            <div>
              <span className="font-bold">Today</span>
              <div className="h-2"></div>
              <div className="flex flex-col gap-2">
                <div className="bg-white/30 p-2 rounded-lg w-full">
                  <div className="flex gap-2">
                    <div className="bg-white/80 rounded-full w-6 h-6"></div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm">
                        Prepare Q3 roadmap presentation
                      </span>
                      <div className="flex items-center gap-1">
                        <TbCalendar className="text-sm" />
                        <span className="font-semibold text-xs">
                          Due tomorrow
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/30 p-2 rounded-lg w-full">
                  <div className="flex gap-2">
                    <div className="bg-white/80 rounded-full w-6 h-6"></div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm">
                        <span className="font-bold">4</span> mentions in{" "}
                        <span className="bg-black/10 rounded-md px-1">
                          #Bugs
                        </span>
                      </span>
                      <div className="flex items-center gap-1">
                        <TbArrowForward className="text-sm" />
                        <span className="font-semibold text-xs">
                          Go to #Bugs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/30 p-2 rounded-lg w-full">
                  <div className="flex gap-2">
                    <div className="bg-white/80 rounded-full w-6 h-6"></div>
                    <div className="flex flex-col leading-tight">
                      <span className="text-sm">
                        High activity in{" "}
                        <span className="bg-black/10 rounded-md px-1">
                          #General
                        </span>
                      </span>
                      <div className="flex items-center gap-1">
                        <TbChecklist className="text-sm" />
                        <span className="font-semibold text-xs">Summerise</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Feature>
  );
};
