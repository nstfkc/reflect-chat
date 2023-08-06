"use client";

import { RealTimeChat } from "./features/RealTimeChat";
import { PeerToPeer } from "./features/PeerToPeerCalls";
import { IntegratedKnowledgeBase } from "./features/KnowledgeBase";
import { AIPoweredSearch } from "./features/AIPoweredSearch";
import { Automations } from "./features/Automations";
import { ThirtPartIntegrations } from "./features/ThirtPartIntegrations";

export const Features = () => {
  return (
    <section id="features" className="px-4">
      <div className="">
        <h3 className="text-2xl font-bold">Features</h3>
      </div>
      <div className="h-4"></div>
      <div className="flex flex-col gap-8">
        <RealTimeChat />
        <PeerToPeer />
        <IntegratedKnowledgeBase />
        <AIPoweredSearch />
        <Automations />
        <ThirtPartIntegrations />
      </div>
      <div className="h-8"></div>
      <div>
        <p>
          And much more to explore and leverage as you elevate your team&apos;s
          communication capabilities.
        </p>
      </div>
    </section>
  );
};
