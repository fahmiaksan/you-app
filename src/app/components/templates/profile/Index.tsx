'use client'
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { TbZodiacVirgo } from "react-icons/tb";
import React, { ChangeEvent, useState } from "react";
import ButtonBack from "../../atom/ButtonBack";
import { UserDataForm } from "@/app/type";
import CardComponentInterest from "../../fragmen/card/CardInterest";
import { useAtom, useAtomValue } from "jotai/react";
import { atoms, atomsAbout } from "@/app/jotai/atom";
import CardComponentAbout from "../../fragmen/card/CardAbout";
import ContentCard from "../../fragmen/card/ContentCard/ContentCard";
import { FaDog, FaDragon, FaHorse } from 'react-icons/fa';
import { IoIosEgg } from 'react-icons/io';
import { GiTigerHead, GiRabbit, GiSnake, GiGoat, GiMonkey, GiPig, GiRooster, GiRat } from 'react-icons/gi';
import { TbZodiacAquarius, TbZodiacAries, TbZodiacCancer, TbZodiacCapricorn, TbZodiacGemini, TbZodiacLeo, TbZodiacLibra, TbZodiacPisces, TbZodiacSagittarius, TbZodiacScorpio, TbZodiacTaurus } from 'react-icons/tb'
import { useResetAtom } from "jotai/utils";
export default function Profile() {
  const [isEditable, setIsEditable] = useState(false);
  const [dataAbout, setDataAbout] = useAtom(atomsAbout);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [interesting, setInteresting] = useState(false);
  const [interest, setInterest] = useAtom(atoms);
  const [file, setFile] = useState<File | null>(null);
  const resetInterest = useResetAtom(atoms);
  const [filePath, setFilePath] = useState('');
  const resetData = useResetAtom(atomsAbout);
  let ageUser = 0;
  const iconHoroscope = {
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
  const iconZodiac = {
    Aries: <TbZodiacAries />,
    Taurus: <TbZodiacTaurus />,
    Gemini: <TbZodiacGemini />,
    Cancer: <TbZodiacCancer />,
    Leo: <TbZodiacLeo />,
    Virgo: <TbZodiacVirgo />,
    Libra: <TbZodiacLibra />,
    Scorpio: <TbZodiacScorpio />,
    Sagittarius: <TbZodiacSagittarius />,
    Capricorn: <TbZodiacCapricorn />,
    Aquarius: <TbZodiacAquarius />,
    Pisces: <TbZodiacPisces />,
  };
  const HoroscopeIcon = (sign: any) => {
    const IconComponent = iconHoroscope[sign];
    return IconComponent;
  };
  const ZodiacIcon = (sign: any) => {
    const IconComponent = iconZodiac[sign];
    return IconComponent;
  }
  const [dataForm, setDataForm] = useState<UserDataForm>({
    displayName: '',
    gender: '',
    date: '',
    height: 0,
    weight: 0,
    selectedImage: null, // Replace with appropriate initial value based on your implementation
    zodiac: '',
    horoscope: '',
  });
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(URL.createObjectURL(event.target.files[0]));
      setFile(event.target.files[0]);
      setDataForm((prev: any) => ({
        ...prev,
        selectedImage: URL.createObjectURL(event.target.files[0]),
      }));
    }
  };

  function formatDate(dateString: string) {
    let date = dateString.split("-");
    const birthday = new Date(dateString);
    const now = new Date();
    let age = now.getFullYear() - birthday.getFullYear();
    let newDate = `${date[2]} / ${date[1]} / ${date[0]} (age ${age})`;
    return newDate;
  }
  console.log(interest);

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    setIsEditable(false);
    const result = await res.json();
    setFilePath(result.filePath);
    setDataAbout((prev: any) => [dataForm]);
  }
  return (
    <main className="flex flex-col w-full py-20 space-y-6 overflow-hidden bg-[#09141A]">
      <button onClick={resetData} className="z-10">
        reset
      </button>
      <button onClick={resetInterest} className="z-10">
        reset
      </button>
      <ButtonBack justify="justify-between">
        <h1>{
          dataAbout.length ?
            dataAbout[0].displayName
            : '@johndoe123'
        }</h1>
        <BsThreeDots size={16} />
      </ButtonBack>
      <div className={`min-w-52 ${dataAbout.length ? 'bg-slate-700/20' : ''} mx-3 relative flex flex-col space-y-4 justify-end min-h-72 rounded-xl text-white bg-center object-contain`}>
        <Image src={
          dataAbout.length ?
            filePath
            : ''
        }
          alt="image" priority fill={true} className="w-full rounded-xl z-0 object-cover bg-center" />
        <span className="bg-gradient-to-t absolute z-20 w-full h-full rounded-xl from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"></span>
        <div className="flex flex-col space-y-1 z-30 px-4">
          <h1 className="font-bold text-xl">
            {
              dataAbout.length ?
                `@${dataAbout[0].displayName}, ${formatDate(dataAbout[0].date)}`
                :
                '@Johndoe123'
            }
          </h1>
          {
            dataAbout.length ?
              <p className="text-base font-medium">{dataAbout[0].gender}</p>
              : ''
          }
        </div>
        {
          dataAbout.length ?
            <div className="text-center text-white flex z-30 px-4 pb-4 space-x-4 text-lg">
              <p className="stroke-neutral-600 backdrop-blur-xl w-max flex items-center gap-2 rounded-full px-3 py-2 font-semibold">
                {HoroscopeIcon(dataAbout[0].horoscope)}
                {dataAbout[0].zodiac}
              </p>
              <p
                className="stroke-neutral-600 backdrop-blur-xl w-max flex items-center gap-2 rounded-full px-3 py-2 font-semibold"
              >
                {ZodiacIcon(dataAbout[0].horoscope)}
                {dataAbout[0].horoscope}
              </p>
            </div>
            :
            ''
        }

      </div>
      <CardComponentAbout
        isEditable={isEditable}
        setIsEditable={setIsEditable}
        title="About"
        handleImageChange={handleImageChange}
        selectedImage={selectedImage}
        setDataForm={setDataForm}
        submitHandler={submitHandler}
      >
        {
          dataAbout.length ? (
            <>
              <ContentCard label="Birthday" value={formatDate(dataAbout[0].date)} />
              <ContentCard label="Horoscope" value={dataAbout[0].horoscope} />
              <ContentCard label="Zodiac" value={dataAbout[0].zodiac} />
              <ContentCard label="Height" value={dataAbout[0].height} />
              <ContentCard label="Weight" value={dataAbout[0].weight} />
            </>
          )
            :
            <h1 className="text-base text-slate-500">Add in your about to find a better match</h1>
        }
      </CardComponentAbout>
      <CardComponentInterest
        interest={interesting}
        setInterest={setInteresting}
        title="Interest"
      >
        {
          interest.length > 0 ?
            (
              <div className="flex flex-wrap gap-x-2 gap-y-1">
                {
                  interest.map((item: any, index: any) => (
                    <p
                      className="rounded-full py-2 px-3 bg-gray-700 text-white text-xl"
                      key={index}
                    >
                      {
                        item
                      }
                    </p>
                  ))
                }
              </div>
            )
            :
            <h1 className="text-base text-slate-500">Add in your about to find a better match</h1>
        }
      </CardComponentInterest>
    </main>
  )
};