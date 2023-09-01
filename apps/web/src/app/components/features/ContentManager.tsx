import { Feature } from "./Feature";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const content = {
  "Mon-0": ["bg-red-600/10", "bg-blue-600/20"],
  "Tue-1": ["bg-emerald-900/10", "bg-pink-600/20", "bg-slate-900/20"],
  "Wed-2": ["bg-red-900/10", "transparent", "bg-blue-900/20"],
  "Thu-3": ["transparent", "bg-blue-600/20", "bg-red-900/10"],
  "Fri-4": ["bg-yellow-900/10", "bg-green-600/20", "bg-zinc-900/10"],
  "Sun-6": ["transparent", "transparent", "bg-teal-900/20"],
};

function getContent(key: string): string[] {
  return content[key] ?? [];
}

export const ContentManager = () => {
  return (
    <Feature
      reversed
      title="Content manager"
      description="Publish and schedule your content, share and preview them with your team before they go live."
    >
      <div className="grid grid-cols-4 grid-rows-3 grid-flow-row gap-1 p-2 h-full">
        {days.map((day, idx) => (
          <div className="bg-black/10  rounded-lg" key={idx}>
            <span className="text-xs px-1 opacity-75">{day}</span>
            <div className="flex flex-col w-full">
              {getContent(`${day}-${idx}`).map((cn, idx) => (
                <div key={idx} className={[cn, "w-full h-3"].join(" ")}></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Feature>
  );
};
