import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function prettyDate(time: string): string|undefined|false {
  var date = new Date((time || "").replace(/-/g, "/").replace(/[TZ]/g, " ")),
      diff = (((new Date()).getTime() - date.getTime()) / 1000),
      day_diff = Math.floor(diff / 86400);

  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return;

  return day_diff == 0 && (
  diff < 60 && "たった今"
  || diff < 120 && "1 分前"
  || diff < 3600 && Math.floor(diff / 60) + " 分前"
  || diff < 7200 && "1 時間前"
  || diff < 86400 && Math.floor(diff / 3600) + " 時間前")
  || day_diff == 1 && "昨日"
  || day_diff < 7 && day_diff + " 日前"
  || day_diff < 31 && Math.ceil(day_diff / 7) + " 週間前";
}
