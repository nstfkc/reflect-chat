import { ReactNode } from "react";
import { IconType } from "react-icons/lib";
import {
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
          <Benefit title="Shaped by User Insights" icon={TbUserQuestion}>
            We&apos;ve taken the time to engage with teams across various
            industries, listening closely to their experiences and challenges.
            This collaborative effort has enabled us to develop features that
            truly resonate with the demands of modern communication, resulting
            in a tool that feels tailor-made for your context.
          </Benefit>
          <Benefit title="Thoughtful Design Simplicity" icon={TbBrush}>
            In a world filled with complexity, Reflect offers a breath of fresh
            air. Our user interface is deliberately designed to be minimalist
            and intuitive. By reducing clutter and distractions, we ensure that
            your focus remains on the conversations and tasks that drive your
            team forward.
          </Benefit>
          <Benefit title="More Time for What Counts" icon={TbClockShield}>
            Your time is precious, and Reflect&apos;s AI-powered capabilities
            are here to help you reclaim it. Imagine having routine tasks such
            as scheduling appointments, setting reminders, and organizing to-dos
            effortlessly managed by our intelligent assistant. This means you
            can direct your energy toward the high-impact activities that truly
            matter for your organization&apos;s success.
          </Benefit>
          <Benefit title="Budget-Friendly Quality" icon={TbCash}>
            At Reflect, we firmly believe that effective communication tools
            should be accessible without straining your budget. Our commitment
            to offering competitive pricing ensures that your team can enjoy
            top-tier communication capabilities without breaking the bank.
            It&apos;s quality and value combined.
          </Benefit>
        </div>
      </div>
    </section>
  );
};
