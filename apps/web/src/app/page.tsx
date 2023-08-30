import Link from "next/link";
import { AppPreview } from "./components/AppPreview";
import { Benefits } from "./components/Benefits";
import { Features } from "./components/Features";
import { WaitingList } from "./components/WaitingListForm";

const Hero = () => {
  return (
    <section id="hero">
      <div className="text-primary px-4">
        <div className="flex flex-col container max-w-4xl mx-auto lg:px-4 py-16 gap-8">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            communication infrastructure <br /> for productivity freaks
          </h1>
          <div>
            <h2 className="text-xl md:text-2xl font-bold tracking-wider">
              <span className="text-alt1">reflect</span> is a replacement for{" "}
              <br />
              slack + zoom + zapier + and more...
            </h2>
          </div>
          <div>
            <Link
              href="#waitinglist"
              className="bg-primary text-secondary font-semibold px-4 py-2 rounded-md"
            >
              Join to our waiting list
            </Link>
          </div>
        </div>
        <div className="h-8"></div>
      </div>
      <div className="px-8 md:px-4">
        <AppPreview />
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div>
      <div className="bg-secondary">
        <div className="container max-w-6xl mx-auto ">
          <Hero />
        </div>
      </div>
      <div className="h-[172px]"></div>
      <div className="container max-w-4xl mx-auto">
        <Benefits />
      </div>

      <div className="h-32"></div>
      <div className="bg-alt1/30">
        <section id="waitinglist">
          <div className="container max-w-4xl mx-auto p-4">
            <WaitingList />
          </div>
        </section>
      </div>

      <div className="h-32"></div>
      <div className="container max-w-4xl mx-auto">
        <Features />
      </div>

      <div className="h-32"></div>
      <div className="bg-alt1/30">
        <div className="container max-w-4xl mx-auto p-4">
          <WaitingList />
        </div>
      </div>
    </div>
  );
}
