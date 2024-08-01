import React, { SVGProps } from "react";
import { HTMLMotionProps } from "framer-motion";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type AnimationProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
};

export type ContactIconProps = {
  iconName: string;
};

export type ContactIconsMap = Record<string, React.ReactNode>;
