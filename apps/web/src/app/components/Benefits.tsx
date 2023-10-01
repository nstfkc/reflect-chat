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
}

const Benefit = (props: BenefitProps) => {
  return (
    <div className="bg-alt2 p-4 rounded-lg">
      <article className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h3 className="text-lg font-bold">{props.title}</h3>
          <div className="bg-primary w-14 h-14 rounded-full flex items-center justify-center">
            {<props.icon className="text-3xl opacity-[0.5] stroke-[1.4px]" />}
          </div>
        </div>
        <p className="opacity-75">{props.children}</p>
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
          <div className="flex gap-3">
            <div className="py-1">
              <TbClock className="text-2xl" />
            </div>
            <p>
              <span className="font-bold">reflect</span>&apos;s main objective
              is to make your business operations as efficient as possible by
              simplifing your communication infrastructure.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="py-1">
              <TbArrowMerge className="rotate-90 text-2xl" />
            </div>
            <p>
              You can channel all of your inbound messages to{" "}
              <span className="font-bold">reflect</span> and manage them in a
              single platform.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="py-1">
              <TbBell className="text-2xl" />
            </div>
            <p>With push notifications you never miss an opportunity.</p>
          </div>
        </div>
        <div className="h-12"></div>
        <div>
          <Link
            href="/contact-us"
            className="bg-secondary px-4 py-2 rounded-md text-primary border-2 border-secondary/10 shadow-md"
          >
            Contact us
          </Link>{" "}
          for more information.
        </div>
      </div>
    </section>
  );
};
