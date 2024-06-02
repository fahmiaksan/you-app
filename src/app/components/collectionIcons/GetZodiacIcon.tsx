import { iconHoroscope, iconZodiac } from "./collection";

export const ZodiacIcon = (sign: any) => {
  const IconComponent = iconZodiac[sign];
  return IconComponent;
}