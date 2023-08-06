import { TbChevronDown } from "react-icons/tb";
import { Feature } from "./Feature";

export const Automations = () => {
  return (
    <Feature
      title="Streamlined Automations"
      description="Efficiency takes center stage with Reflect's automations.
          Repetitive tasks that used to eat up your time can now be automated,
          allowing you to streamline processes and maintain consistent workflows
          effortlessly."
    >
      <div className="p-4 flex flex-col gap-2">
        <div className="flex flex-col items-start gap-1 w-full">
          <div>
            <span className="rounded-md text-sm font-bold px-1">When</span>
          </div>
          <div className="bg-white/30 w-full rounded-md p-2 flex justify-between items-center">
            <div className="text-sm">New user joins</div>
            <div>
              <TbChevronDown className="text-lg" />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <div>
            <span className="rounded-md text-sm font-bold px-1">
              Conditions
            </span>
          </div>
          <div className="flex gap-2">
            <div className="text-sm p-2">1.</div>
            <div className="flex gap-2 text-sm">
              <div className="flex gap-2 items-center bg-white/30 rounded-md p-2">
                <div className="">User</div>
                <TbChevronDown className="text-lg" />
              </div>
              <div className="flex gap-2 items-center bg-white/30 rounded-md p-2">
                <div className="">is not</div>
                <TbChevronDown className="text-lg" />
              </div>
              <div className="flex gap-2 items-center bg-white/30 rounded-md p-2">
                <div className="">Admin</div>
                <TbChevronDown className="text-lg" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-1 w-full">
          <div>
            <span className="rounded-md text-sm font-bold px-1">Actions</span>
          </div>
          <div className="flex gap-2">
            <div className="text-sm p-2">1.</div>
            <div className="flex gap-2 text-sm">
              <div className="flex gap-2 items-center bg-white/30 rounded-md p-2">
                <div className="">Send onboarding documents</div>
                <TbChevronDown className="text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Feature>
  );
};
