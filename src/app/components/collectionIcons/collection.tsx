import { FaDog, FaDragon, FaHorse } from 'react-icons/fa';
import { IoIosEgg } from 'react-icons/io';
import { GiTigerHead, GiRabbit, GiSnake, GiGoat, GiMonkey, GiPig, GiRooster, GiRat } from 'react-icons/gi';
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus, TbZodiacVirgo } from 'react-icons/tb'
interface IconsProps {
  [key: string]: JSX.Element
}
export const iconHoroscope: IconsProps = {
  "Rat": <GiRat size={20} />,
  "Ox": <IoIosEgg size={20} />,
  "Tiger": <GiTigerHead size={20} />,
  "Rabbit": <GiRabbit size={20} />,
  "Dragon": <FaDragon size={20} />,
  "Snake": <GiSnake size={20} />,
  "Horse": <FaHorse size={20} />,
  "Goat": <GiGoat size={20} />,
  "Monkey": <GiMonkey size={20} />,
  "Rooster": <GiRooster size={20} />,
  "Dog": <FaDog size={20} />,
  "Pig": <GiPig size={20} />,
};
export const iconZodiac: IconsProps = {
  'Aries': <TbZodiacAries />,
  'Taurus': <TbZodiacTaurus />,
  'Gemini': <TbZodiacGemini />,
  'Cancer': <TbZodiacCancer />,
  'Leo': <TbZodiacLeo />,
  'Virgo': <TbZodiacVirgo />,
  'Libra': <TbZodiacLibra />,
  'Scorpio': <TbZodiacScorpio />,
  'Sagittarius': <TbZodiacSagittarius />,
  'Capricorn': <TbZodiacCapricorn />,
  'Aquarius': <TbZodiacAquarius />,
  'Pisces': <TbZodiacPisces />,
};