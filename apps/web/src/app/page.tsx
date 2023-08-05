import { AppPreview } from "./components/AppPreview";
import { AIPoweredSearch } from "./components/features/AIPoweredSearch";
import { Automations } from "./components/features/Automations";
import { KnowledgeBase } from "./components/features/KnowledgeBase";
import { PeerToPeerCalls } from "./components/features/PeerToPeerCalls";
import { PersonalAIAssistant } from "./components/features/PersonalAIAssistant";
import { RealTimeChat } from "./components/features/RealTimeChat";

const Hero = () => {
  return (
    <section>
      <div className="text-primary">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-black">
            Communication app for teams <br /> and communities
          </h1>
          <h2 className="text-xl">Tailored for productivity</h2>
        </div>

        <div className="h-8"></div>
      </div>
      <div
        className={[
          "aspect-[5/3]",
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
        <AppPreview />
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="container max-w-6xl mx-auto">
          <Hero />
        </div>
      </div>
      <div className="h-[72px]"></div>
    </div>
  );
}
