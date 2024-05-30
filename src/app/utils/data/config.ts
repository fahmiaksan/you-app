import { ZodiacSignValue } from "@/app/type";

// const zodiacSigns: ZodiacSignValue = {
//   Aries: { start: "21-03", end: "19-04" },
//   Taurus: { start: "20-04", end: "20-05" },
//   Gemini: { start: "21-05", end: "20-06" },
//   Cancer: { start: "21-06", end: "22-07" },
//   Leo: { start: "23-07", end: "22-08" },
//   Virgo: { start: "23-08", end: "22-09" },
//   Libra: { start: "23-09", end: "22-10" },
//   Scorpio: { start: "23-10", end: "21-11" },
//   Sagittarius: { start: "22-11", end: "21-12" },
//   Capricorn: { start: "22-12", end: "19-01" },
//   Aquarius: { start: "20-01", end: "18-02" },
//   Pisces: { start: "19-02", end: "20-03" },
// };

// export const getZodiacSign = (dateString: string): string => {
//   const [year, month, day] = dateString.split("-");
//   const dateKey = `${month}-${day}`;

//   for (const sign in zodiacSigns) {
//     const { start, end } = zodiacSigns[sign];
//     const [startMonth, startDay] = start.split("-");
//     const [endMonth, endDay] = end.split("-");

//     const startKey = `${startMonth}-${startDay}`;
//     const endKey = `${endMonth}-${endDay}`;

//     if ((dateKey >= startKey && dateKey <= endKey) ||
//       (startKey > endKey && (dateKey >= startKey || dateKey <= endKey))) {
//       return sign;
//     }
//   }

//   return "Invalid Date";
// };

const zodiacSigns: { [key: string]: { start: string; end: string } } = {
  Aries: { start: "03-21", end: "04-19" },
  Taurus: { start: "04-20", end: "05-20" },
  Gemini: { start: "05-21", end: "06-20" },
  Cancer: { start: "06-21", end: "07-22" },
  Leo: { start: "07-23", end: "08-22" },
  Virgo: { start: "08-23", end: "09-22" },
  Libra: { start: "09-23", end: "10-22" },
  Scorpio: { start: "10-23", end: "11-21" },
  Sagittarius: { start: "11-22", end: "12-21" },
  Capricorn: { start: "12-22", end: "01-19" },
  Aquarius: { start: "01-20", end: "02-18" },
  Pisces: { start: "02-19", end: "03-20" },
};

export const getZodiacSign = (dateString: string): string => {
  const [year, month, day] = dateString.split("-");
  const dateKey = new Date(`${year}-${month}-${day}`);

  for (const sign in zodiacSigns) {
    const { start, end } = zodiacSigns[sign];
    const [startMonth, startDay] = start.split("-");
    const [endMonth, endDay] = end.split("-");

    const startDate = new Date(`${year}-${startMonth}-${startDay}`);
    const endDate = new Date(`${year}-${endMonth}-${endDay}`);

    if (startMonth > endMonth) {
      // Handle zodiac signs that span across the year boundary
      if ((dateKey >= startDate && dateKey <= new Date(`${year}-12-31`)) || (dateKey >= new Date(`${year}-01-01`) && dateKey <= endDate)) {
        return sign;
      }
    } else {
      if (dateKey >= startDate && dateKey <= endDate) {
        return sign;
      }
    }
  }

  return "Invalid Date";
};

const horoscopeSign = (birthYear: number) => {
  // Handle invalid birth years (outside 1936-2019 range)
  if (birthYear < 1936 || birthYear > 2019) {
    return "Invalid Birth Year";
  }

  const horoscopeSign = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  const zodiacSignIndex = (birthYear - 2008) % 12;

  // Ensure index is positive
  const positiveIndex = zodiacSignIndex < 0 ? zodiacSignIndex + 12 : zodiacSignIndex;

  return horoscopeSign[positiveIndex];
};


export const getHoroscopeSign = (dateString: string) => {
  const [year, month, day] = dateString.split("-");
  const birthYear = parseInt(year);
  return horoscopeSign(birthYear);
}