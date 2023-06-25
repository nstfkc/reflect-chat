import Link from "next/link";

export default function Home() {
  return (
    <main className="text-gray-700 bg-red-50">
      <header>
        <nav>
          <div className="container mx-auto max-w-4xl px-4 md:px-0">
            <div className="flex items-center justify-between py-4">
              <div>
                <Link className="text-lg font-black" href="/">
                  reflect
                </Link>
              </div>
              <div className="flex gap-8">
                <Link
                  href="#features"
                  className="font-semibold text-sm tracking-wide"
                >
                  features
                </Link>
                <Link
                  href="#roadmap"
                  className="font-semibold text-sm tracking-wide"
                >
                  roadmap
                </Link>
                <a
                  href="#features"
                  className="font-semibold text-sm tracking-wide"
                >
                  contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <div className="h-16"></div>

      <div className="container mx-auto max-w-4xl px-4 md:px-0">
        <section id="hero">
          <div className="flex flex-col">
            <span className="text-xl font-black tracking-wider">
              AI powered
            </span>
            <h1 className="text-4xl md:text-6xl font-black">
              Communication <br />
              and knowledge sharing
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
            <span className="italic">Available on all platforms</span>
            <p>iOS, Android, MacOS, Windows, Linux and Web</p>
          </div>
        </section>
        <div className="h-16"></div>
        <section id="features">
          <h2 className="font-semibold tracking-wider text-xl">Features</h2>
          <div className="h-4"></div>
          <div className="max-w-lg">
            <div className="flex flex-col gap-8 leading-relaxed">
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  Real-time chat
                </h3>
                <p>
                  You can communicate with your peers and team mates via direct
                  messages and public or private channels.
                </p>
                <p>
                  <strong>reflect</strong> aims to provide the best user
                  experience to make your daily activities as efficient and
                  enjoyable as possible.
                </p>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  Peer-to-Peer Audio and video calls
                </h3>
                <p>
                  Sometimes it is just better to hop into a call, reflect allows
                  you to make peer-to-peer audio and video calls with close to 0
                  latency.
                </p>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  Knowledge base
                </h3>
                <p>
                  You don&apos;t need to switch between tabs and windows, you
                  have your own knowledge base right where you need it the most.
                </p>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  AI powered search
                </h3>
                <p>
                  You can ask questions about your organisation and AI will find
                  answers through conversations and shared files available to
                  you.
                </p>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  Personal AI assistant
                </h3>
                <p>
                  You can use AI assistant to compose crystal clear messages.
                </p>
                <p>
                  And your trivial tasks like setting reminders, action items,
                  setting appointments etc. will be handled for you through the
                  messages you receive.
                </p>
              </div>
              <div>
                <h3 className="font-black text-xl tracking-wider">
                  Automations
                </h3>
                <p>
                  Reflect allows you to hook into every event and create
                  automations with ease for your workflows regardless of their
                  complexity.
                </p>
              </div>
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
            </div>
          </div>
        </section>
        <div className="h-16"></div>
        {/* <section id="roadmap">
            <h2 className="font-semibold tracking-wider text-xl">Roadmap</h2>
            <div>
            <h3>In progress</h3>
            <div>Users can create and manage their organisations</div>
            </div>
            </section> */}
      </div>
    </main>
  );
}
