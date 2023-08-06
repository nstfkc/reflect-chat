import { Subject } from "@/utils/Subject";
import { useEffect, useRef, useSyncExternalStore } from "react";
import { Feature } from "./Feature";

const knowledgeBaseTitles = [
  "Getting Started: A Quick Guide for New Users",
  "Frequently Asked Questions",
  "Troubleshooting and Common Issues",
  "How-to Guides: Step-by-Step Tutorials",
  "Features and Functionality",
  "Optimizing Your Experience: Tips and Tricks",
  "Integrations and Third-Party Apps",
  "Security and Privacy: Best Practices",
  "Product Updates and Release Notes",
  "Contacting Support: Help When You Need It",
  "User Onboarding: A Seamless Introduction",
  "Advanced User Techniques and Strategies",
  "Admin Guide",
  "Customization and Personalization",
  "Glossary of Terms",
  "Accessibility and Inclusivity Features",
  "Community Forum: Engage with Other Users",
  "Data Migration and Backup Procedures",
  "Scaling: Enterprise Solutions",
  "Mobile App Usage and Features",
];

function highlightSplit(input: string, delimiter: string): string[] {
  const index = input.toLowerCase().indexOf(delimiter.toLowerCase());

  if (index !== -1) {
    const firstPart = input.substring(0, index);
    const secondPart = input.substring(index, index + delimiter.length);
    const thirdPart = input.substring(index + delimiter.length);

    return [firstPart, secondPart, thirdPart];
  }

  return [input];
}

export const IntegratedKnowledgeBase = () => {
  const querySubject = useRef(new Subject(""));
  const query = useSyncExternalStore(
    querySubject.current.subscribe,
    querySubject.current.getValue,
    querySubject.current.getValue
  );

  const isRunning = useRef(false);

  const enterQuery = () => {
    const item =
      knowledgeBaseTitles[
        Math.floor(Math.random() * knowledgeBaseTitles.length)
      ];

    const words = item.split(" ").filter((word) => word.length > 3);

    const word = words[Math.floor(Math.random() * words.length)];

    return word;
  };

  const updateQuery = async (word = enterQuery()) => {
    const query = querySubject.current.getValue();
    if (String(word) === String(query)) {
      await new Promise((resolve) =>
        setTimeout(resolve, Math.max(1000, Math.random() * 1000))
      );
      querySubject.current.next("");
      await new Promise((resolve) =>
        setTimeout(resolve, Math.max(1000, Math.random() * 1000))
      );
      await updateQuery();
    } else {
      querySubject.current.next("");
      const nextLetter = [...word.split("")][query.length];
      querySubject.current.next([...query.split(""), nextLetter].join(""));
      await new Promise((resolve) =>
        setTimeout(resolve, Math.max(60, Math.random() * 200))
      );
      await updateQuery(word);
    }
  };

  useEffect(() => {
    if (!isRunning.current) {
      isRunning.current = true;
      updateQuery();
      console.log("asdasd");
    }
  }, [updateQuery]);

  const items = knowledgeBaseTitles
    .filter(
      (item) => item.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) >= 0
    )
    .slice(0, 10);

  return (
    <Feature
      title=" Integrated Knowledge Base"
      description="Harness the collective wisdom of your team with Reflect's
          integrated knowledge base. It's a central hub where crucial
          information resides, facilitating swift access and informed
          decision-making. Say goodbye to digging through emails or lost
          documents."
    >
      <div className="flex flex-col items-center justify-between h-full p-2 relative">
        <div className="grid grid-cols-4 gap-4 w-auto p-2">
          {items.map((item) => {
            const res = highlightSplit(item, query);
            return (
              <div
                key={item}
                className="text-[8px] border-[1px] border-secondary/75 rounded-md p-1 overflow-hidden"
              >
                {res.map((i, index) => (
                  <span
                    key={index}
                    className={[
                      index === res.indexOf(query) ? "bg-black/10" : "",
                    ].join("")}
                  >
                    {i}
                  </span>
                ))}
              </div>
            );
          })}
        </div>
        <div className="shrink-0 flex-1 absolute z-10 bg-alt2 bottom-0 py-2">
          <input
            defaultValue={query}
            className="px-4 py-1 rounded-md bg-white/30 text-sm"
            placeholder="Search..."
          />
        </div>
      </div>
    </Feature>
  );
};
