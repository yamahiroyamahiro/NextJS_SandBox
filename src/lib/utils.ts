import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatTime = (inputTime: string | null | undefined) => {
  if (!inputTime) {
    return "";
  }
  const timeParts = inputTime.split(":");
  if (timeParts.length === 2) {
    const hours = timeParts[0].padStart(2, "0");
    const minutes = timeParts[1].padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return inputTime;
};

export const enableWindow = (releaseLevel: string, windowName: string) => {
  if (releaseLevel === "RETOOL") {
    return true;
  } else if (releaseLevel === "BETA_TEST") {
    if (windowName === "chat") {
      return false;
    }
    return true;
  } else if (releaseLevel === "EARY_ACCESS") {
    if (windowName === "chat") {
      return false;
    }
    return true;
  }

  return false;
};
