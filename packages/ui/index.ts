// component exports
import type {Config} from "tailwindcss";
import type { ClassValue } from "clsx";
import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(...inputs));
}

export const baseConfig = {
    content: [""],
    theme: {
      extend: {},
    },
    plugins: [],
} satisfies Config;