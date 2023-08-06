import { AppPreview } from "./components/AppPreview";

const Hero = () => {
  return (
    <section>
      <div className="text-primary px-4">
        <div className="flex flex-col">
          <h1 className="text-2xl md:text-3xl font-black">
            Communication app for teams <br /> and communities
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
      <div className="h-[72px]"></div>
    </div>
  );
}
