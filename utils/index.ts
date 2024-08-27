import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * gsap animation utils
 */
gsap.registerPlugin(useGSAP);

const animator = gsap;

export default animator;

/**
 * tailwind merge utils
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
