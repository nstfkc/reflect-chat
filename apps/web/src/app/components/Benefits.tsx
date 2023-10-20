import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import {
  TbArrowGuide,
  TbArrowMerge,
  TbArrowWaveRightUp,
  TbArrowsUp,
  TbBell,
  TbBrush,
  TbCash,
  TbClock,
  TbClockShield,
  TbNotification,
  TbPaint,
  TbUserQuestion,
} from "react-icons/tb";

interface BenefitProps {
  title: string;
  children: ReactNode;
  icon: IconType;
  index: number;
}

const Benefit = (props: BenefitProps) => {
  return (
    <div className="bg-alt2/50 p-4 rounded-lg relative">
      <article className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{props.title}</h3>
        </div>
        <p className="">{props.children}</p>
      </article>
    </div>
  );
};

export const Benefits = () => {
  return (
    <section id="benefits">
      <div className="px-4">
        <h2 className="text-2xl font-bold">Benefits</h2>
        <div className="h-4"></div>
        <div className="flex flex-col gap-4">
          <Benefit
            icon={TbClock}
            title="Unlock your organisation's full potential"
            index={1}
          >
            You and your team will only focus on what brings value to your
            business. You can automate everything with{" "}
            <span className="font-bold">fleckt</span>.
          </Benefit>

          <Benefit
            index={2}
            title="Simplify your work flow"
            icon={TbArrowMerge}
          >
            You will not juggle between different apps.{" "}
            <span className="font-bold">fleckt</span> has everything you need.
            We will help you to build custom solutions for specifically for your
            business.
          </Benefit>
          <Benefit index={3} title="Never miss an opportunity" icon={TbBell}>
            You can create notifications for everything.{" "}
            <span className="font-bold">fleck</span> will let you know whenever
            there is an opportunity.
          </Benefit>
        </div>
        <div className="h-12"></div>
        <div>
          <Link
            href="/contact-us"
            className="bg-secondary px-4 py-2 rounded-md text-primary border-2 border-secondary/10 shadow-md"
          >
            Contact us
          </Link>{" "}
          to learn more.
        </div>
      </div>
    </section>
  );
};
