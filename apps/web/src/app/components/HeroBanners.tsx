"use client";
import { IconType } from "react-icons/lib";
import {
  TbCategory2,
  TbCode,
  TbDots,
  TbForms,
  TbHeadset,
  TbList,
  TbMessage2,
  TbPuzzle2,
} from "react-icons/tb";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTime,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { log } from "util";

const Arrow = (props: { path: string }) => {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="0"
          refY="3.5"
          orient="auto"
        >
          <polygon fill="#fff" points="0 0, 10 3.5, 0 7" />
        </marker>
      </defs>
      <path
        d={props.path}
        fill="transparent"
        stroke="#fff"
        strokeWidth="2"
        strokeDasharray="10,5"
        markerEnd="url(#arrowhead)"
      />
    </svg>
  );
};

interface SourceProps {
  label: string;
  icon: IconType;
}

const Source = (props: SourceProps) => {
  const { label, icon: Icon } = props;
  return (
    <div className="flex flex-col items-center">
      <Icon className="text-2xl" />
      <span className="text-center">{label}</span>
    </div>
  );
};

const Arrows = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-1">
        <Arrow path="M 250 50 L 350 150"></Arrow>
      </div>
      <div className="col-span-1">
        <Arrow path="M 200 50 L 200 150"></Arrow>
      </div>
      <div className="col-span-1">
        <Arrow path="M 150 50 L 50 150"></Arrow>
      </div>
    </div>
  );
};

const sourceWrapperClass = "col-span-1 flex justify-center p-4";

export const XHeroBanners = () => {
  return (
    <div>
      <div className="grid grid-cols-3">
        <div className={sourceWrapperClass}>
          <Source icon={TbHeadset} label="Chatbots" />
        </div>
        <div className={sourceWrapperClass}>
          <Source icon={TbCode} label="API" />
        </div>
        <div className={sourceWrapperClass}>
          <Source icon={TbForms} label="Forms" />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="border-2 w-32 h-32 border-primary rounded-full flex items-center justify-center">
          <span className="font-bold">reflect</span>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className={sourceWrapperClass}>
          <Source icon={TbMessage2} label="External Channels" />
        </div>
        <div className={sourceWrapperClass}>
          <Source icon={TbList} label="Logs" />
        </div>

        <div className={sourceWrapperClass}>
          <Source icon={TbCategory2} label="Custom Widgets" />
        </div>
      </div>
    </div>
  );
};

const RevolvingCircle = () => {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    const angle = (t % (1440 * 10)) / 10;
    const x = 300 * Math.cos((angle * Math.PI) / 180);
    const y = 300 * Math.sin((angle * Math.PI) / 180);
    ref.current.style.left = `${45 + x / 8}%`;
    ref.current.style.top = `${45 + y / 8}%`;
  });

  return (
    <div className="container max-w-2xl mx-auto aspect-[3/2] border-2 relative">
      <div
        ref={ref}
        className="w-[10%] aspect-[1]"
        style={{
          borderRadius: "50%",
          backgroundColor: "blue",
          position: "absolute",
          top: "50%",
          left: "50%",
        }}
      />
    </div>
  );
};

interface ItemProps {
  label: string;
  icon: IconType;
  left: number;
  top: number;
}

const Item = (props: ItemProps) => {
  const { icon: Icon, left, top, label } = props;
  return (
    <div
      style={{ "--left": `${left}%`, "--top": `${top}%` } as any}
      className="absolute left-[--left] top-[--top]"
    >
      <div className="fcc flex-col">
        <div className="bg-primary text-secondary border-primary rounded-full w-8 md:w-12 h-8 md:h-12 fcc">
          <Icon className="text-lg md:text-2xl" />
        </div>
        <div className="w-12 md:w-16 text-xs md:text-sm text-center leading-tight">
          {label}
        </div>
      </div>
    </div>
  );
};

const EmptyItem = (props: { left: number; top: number }) => {
  const { left, top } = props;
  return (
    <div
      style={{ "--left": `${left}%`, "--top": `${top}%` } as any}
      className="absolute left-[--left] top-[--top] w-4 h-4 bg-primary rounded-full opacity-50"
    ></div>
  );
};

export const HeroBanners = () => {
  return (
    <div className="w-full aspect-[4/3] overflow-hidden">
      <div className="w-full aspect-[1] text-primary relative translate-y-[-50%] top-[50%]">
        <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center rc">
          <span className="text-center font-bold">reflect</span>
        </div>
        <div className="absolute w-[50%] h-[50%] border-[1px] border-dashed border-primary/30 rounded-full rc"></div>
        <div className="absolute w-[60%] h-[60%] border-[1px] border-dashed border-primary/10 rounded-full rc"></div>
        <div className="absolute w-[80%] h-[80%] border-[1px] border-dashed border-primary/30 rounded-full rc"></div>
        <div className="absolute w-[95%] h-[95%] border-[1px] border-dashed border-primary/10 rounded-full rc"></div>
        <div className="absolute w-[110%] h-[110%] border-[1px] border-dashed border-primary/30 rounded-full rc"></div>
        <Item label="Chatbots" icon={TbHeadset} left={80} top={20} />
        <Item label="API" icon={TbCode} left={30} top={20} />
        <Item label="Custom Widgets" icon={TbCategory2} left={30} top={70} />
        <Item label="Customer Service" icon={TbMessage2} left={5} top={40} />
        <Item label="Forms" icon={TbForms} left={70} top={40} />
        <Item label="Plugins" icon={TbPuzzle2} left={80} top={70} />
        <Item label="Logs" icon={TbList} left={50} top={70} />
      </div>
    </div>
  );
};
