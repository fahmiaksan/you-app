import { iconHoroscope } from "./collection";

export const HoroscopeIcon = (sign: any) => {
  const IconComponent = iconHoroscope[sign];
  return IconComponent;
};