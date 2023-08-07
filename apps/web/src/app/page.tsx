import { AppPreview } from "./components/AppPreview";
import { Benefits } from "./components/Benefits";
import { Features } from "./components/Features";
import { WaitingListForm } from "./components/WaitingListForm";

const Hero = () => {
  return (
    <section id="hero">
      <div className="text-primary px-4">
        <div className="flex flex-col container max-w-4xl mx-auto px-4">
          <h1 className="text-2xl md:text-3xl font-black">
            Communication infrastructure <br /> for teams <br /> and communities
          </h1>
          <h2 className="text-xl">Tailored for productivity</h2>
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
        <div className="container max-w-4xl mx-auto p-4">
          <WaitingListForm></WaitingListForm>
        </div>
      </div>

      <div className="h-32"></div>
      <div className="container max-w-4xl mx-auto">
        <Features />
      </div>
    </div>
  );
}
