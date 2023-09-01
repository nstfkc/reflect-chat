import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import {
  TbArrowGuide,
  TbArrowMerge,
  TbArrowWaveRightUp,
  TbArrowsUp,
  TbBrush,
  TbCash,
  TbClockShield,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Benefit
            title="Remove clutter from your workflow"
            icon={TbArrowGuide}
          >
            Every software employed in your operations is a liability.
            <strong> reflect</strong> eliminates complexity by offering a
            unified platform that incorporates all necessary tools.
          </Benefit>
          <Benefit title="Automate everything" icon={TbArrowMerge}>
            <strong>reflect</strong> comes with a no-code tool for you to
            automate everything in your workflow
          </Benefit>
          <Benefit
            title="Tailored Solutions for Unique Challenges"
            icon={TbArrowWaveRightUp}
          >
            <strong>reflect</strong> is an extensible platform. You can
            implement custom solutions for your unique problems. We assist you
            whenever you need technical support.
          </Benefit>
          <Benefit title="First-class AI integration" icon={TbArrowsUp}>
            We implement every feature AI in mind. <strong>reflect</strong>,
            frees you from mundane tasks like setting meetings, creating todo
            lists, reminders etc.
          </Benefit>
        </div>
      </div>
    </section>
  );
};
