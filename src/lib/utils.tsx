import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: any) => {
  return twMerge(clsx(inputs));
};

export const customThrottle = (callback: Function, delay: number) => {
  let last = 0;
  console.log("Calling custom throttle method");

  return (...args: any) => {
    let now = new Date().getTime();

    if (now - last < delay) return;
    last = now;
    return callback(...args);
  };
};