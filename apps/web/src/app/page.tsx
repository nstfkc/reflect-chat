import Link from "next/link";
import { AppPreview } from "./components/AppPreview";
import { Benefits } from "./components/Benefits";
import { Features } from "./components/Features";
import { WaitingList } from "./components/WaitingListForm";
import { PropsWithChildren } from "react";
import { IconType } from "react-icons/lib";
import {
  TbUsersGroup,
  TbMessageCheck,
  TbCalendarTime,
  TbArrowGuide,
} from "react-icons/tb";
import { HeroBanners } from "./components/HeroBanners";

const Wrapper = ({
  children,
  Icon = TbUsersGroup,
}: PropsWithChildren<{ Icon: IconType }>) => {
  return (
    <div className="bg-white/20 p-4 rounded-lg text-xl tracking-wide flex items-center gap-4">
      <div className="w-16 h-16 rounded-full bg-secondary flex justify-center items-center">
        <Icon className="text-2xl" />
      </div>
      <div className="font-semibold text-xl tracking-0">{children}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section id="hero">
      <div className="text-primary px-4">
        <div className="h-8"></div>
        <div className="flex flex-col container max-w-4xl mx-auto lg:px-4 gap-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-center">
            communication infrastructure <br /> for{" "}
            <span className="text-alt1">online businesses</span>
          </h1>
        </div>
      </div>
      <div className="container max-w-3xl mx-auto">
        <HeroBanners />
      </div>
      <div className="px-8 md:px-4"></div>
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
      <div className="container max-w-2xl mx-auto py-12">
        <Benefits />
      </div>

      <div className="container max-w-2xl p-4 mx-auto">
        <section id="features" className="py-12">
          <Features />
        </section>
      </div>

      <div className="bg-alt1/30">
        <section id="waitinglist">
          <div className="container max-w-2xl mx-auto p-4 py-12">
            <WaitingList />
          </div>
        </section>
      </div>
    </div>
  );
}
