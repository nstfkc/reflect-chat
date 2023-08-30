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
      <article>
        <div className="flex items-center justify-between">
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
          <Benefit title="Efficient Workflow Integration" icon={TbArrowGuide}>
            Every tool employed in your operations represents a potential weak
            link and liability. <strong>reflect</strong> eliminates complexity
            by offering a unified platform that incorporates all necessary
            tools.
          </Benefit>
          <Benefit title="Seamless Automation" icon={TbArrowMerge}>
            Featuring a market-leading automation system,{" "}
            <strong>reflect</strong> empowers you to effortlessly harness
            operational events, converting them into actions that can generate
            reports or trigger subsequent events.
          </Benefit>
          <Benefit
            title="Tailored Solutions for Unique Challenges"
            icon={TbArrowWaveRightUp}
          >
            Recognizing that not every challenge has a pre-built solution,
            <strong>reflect</strong> provides a platform to construct solutions
            for your specific needs.
          </Benefit>
          <Benefit title="First-class AI integration" icon={TbArrowsUp}>
            Bid farewell to mundane tasks such as scheduling meetings, setting
            reminders, crafting to-do lists, and follow-ups. With{" "}
            <strong>reflect</strong>, every member of your organization gains an
            AI-powered personal assistant.
          </Benefit>
        </div>
      </div>
    </section>
  );
};
