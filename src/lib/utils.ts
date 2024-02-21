import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { createTwc } from "react-twc";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const twx = createTwc({ compose: cn });
