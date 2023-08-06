import { ReactNode } from "react";

interface FeatureProps {
  title: string;
  description: string;
  children: ReactNode;
  imageUrl?: string;
  reversed?: boolean;
}

export const Feature = (props: FeatureProps) => {
  const { children, title, description, imageUrl, reversed = false } = props;

  return (
    <div>
      <div
        className={[
          "flex flex-col md:flex-row gap-8 select-none",
          reversed ? "md:flex-row-reverse" : "",
        ].join(" ")}
      >
        <div className="w-full md:w-1/2">
          <h4 className="text-lg font-bold">{title}</h4>
          <p>{description}</p>
        </div>
        <div className="w-full md:w-1/2 bg-alt2 rounded-lg aspect-[5/4] md:aspect-[5/3] overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};
