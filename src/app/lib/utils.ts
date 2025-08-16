import { ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const cx = (...classes: ClassValue[]) =>
  classes.filter(Boolean).join(" ")

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTimeOfDayGreeting = () => {
  const now = new Date()
  const hours = now.getHours()

  if (hours < 12) {
    return "Good morning!"
  } else if (hours < 17) {
    return "Good afternoon!"
  } else {
    return "Good evening!"
  }
}
