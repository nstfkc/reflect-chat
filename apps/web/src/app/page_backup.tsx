import { AIPoweredSearch } from "./components/features/AIPoweredSearch";
import { Automations } from "./components/features/Automations";
import { IntegratedKnowledgeBase } from "./components/features/KnowledgeBase";
import { PeerToPeer } from "./components/features/PeerToPeerCalls";
import { PersonalAIAssistant } from "./components/features/PersonalAIAssistant";
import { RealTimeChat } from "./components/features/RealTimeChat";

export default function Home() {
  return (
    <main className="">
      <div className="h-16"></div>
      <div className="container mx-auto max-w-4xl px-4 md:px-0">
        <section id="hero">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider">
              AI powered
            </span>
            <h1 className="text-4xl md:text-6xl font-black">
              Communication <br />
              and knowledge base
              <br />
              software
            </h1>
            <div className="h-4"></div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-widest">
              for teams and communities
            </h2>
          </div>

          <div className="h-8"></div>
          <div>
            <span className="italic">Available on all platforms (soon)</span>
            <p>iOS, Android, MacOS, Windows, Linux and Web</p>
          </div>
        </section>
        <div className="h-16"></div>
        <section id="features">
          <h2 className="tracking-wider text-xl tracking-widest">Features</h2>
          <div className="h-4"></div>
          <div className="max-w-lg">
            <div className="flex flex-col gap-8 leading-relaxed">
              <RealTimeChat />
              <PeerToPeer />
              <IntegratedKnowledgeBase />
              <AIPoweredSearch />
              <PersonalAIAssistant />
              <Automations />
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  3rd party integrations
                </h3>
                <p>
                  reflect has builtin integration support for your favorite
                  tools. If it doesn&apos;t you can create your own integration
                  through APIs.
                </p>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  And many more..
                </h3>
                <p>
                  If you want to know if your favorite feature is going to be
                  implemented or if you want to share your ideas hit us a DM on{" "}
                  <a
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/reflectrocks"
                  >
                    twitter
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="h-16"></div>
        <section id="roadmap" className="max-w-lg">
          <h2 className="tracking-wider text-xl tracking-widest">Roadmap</h2>
          <div className="py-2"></div>
          <div>
            <h3 className="font-black text-xl tracking-wider">
              Next milestone
            </h3>
            <div>
              <p>
                <strong>0.1.0</strong> web version is live for private testing.
              </p>
              <div className="h-2"></div>
              <h4 className="font-bold">Features</h4>
              <p>- Real-time chat</p>
              <p>- Personal assistant POC</p>
            </div>
          </div>
          <div className="h-8"></div>
          <div>
            <h3 className="font-black text-xl tracking-wider">
              What we are working on right now
            </h3>

            <div className="h-4"></div>
            <div className="flex flex-col gap-2">
              <div>
                <h4 className="font-bold">Authentication</h4>
                <p>- Users can register</p>
              </div>
              <div>
                <h4 className="font-bold">Home Screen</h4>
                <p>
                  - Users can see the list of channels they received messages
                  with badges indicates the amount of mentions user received
                </p>
                <p>
                  - Users can see the list of direct messages with badges
                  indicates the amount of messages user haven’t read
                </p>
              </div>
              <div>
                <h4 className="font-bold">User Screen</h4>
                <p>- Users can edit their profile</p>
                <p>- Users can set their status (busy, away etc.)</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
