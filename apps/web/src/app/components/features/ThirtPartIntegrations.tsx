import { Feature } from "./Feature";
import { CgLinear } from "react-icons/cg";
import { ImGoogleDrive } from "react-icons/im";
import { BiLogoZoom } from "react-icons/bi";
import { BsWrench } from "react-icons/bs";

import { SiGooglecalendar, SiGithub, SiGitlab, SiZapier } from "react-icons/si";

const icons = {
  Linear: CgLinear,
  "Google Drive": ImGoogleDrive,
  "Google Calendar": SiGooglecalendar,
  Github: SiGithub,
  Gitlab: SiGitlab,
  Zoom: BiLogoZoom,
  Zapier: SiZapier,
  "Developer API": BsWrench,
};

export const ThirtPartIntegrations = () => {
  return (
    <Feature
      reversed
      title="3rd Party Integrations"
      description="We've designed our platform to
          seamlessly integrate with your favorite third-party applications,
          ensuring that your tools work harmoniously to enhance your
          communication experience."
    >
      <div className="flex flex-col gap-4 justify-center items-center h-full">
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-2 opacity-75">
          {Object.entries(icons).map(([key, Icon]) => (
            <div
              key={key}
              className="p-2 bg-white/30 rounded-md flex flex-col gap-2 justify-center items-center"
            >
              <Icon key={key} className="text-3xl" />
              <span className="text-[8px] font-bold leading-tight">{key}</span>
            </div>
          ))}
        </div>
        <div className="text-sm">And many more...</div>
      </div>
    </Feature>
  );
};
