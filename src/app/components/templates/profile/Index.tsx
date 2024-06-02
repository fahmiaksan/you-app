'use client'
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import React, { ChangeEvent, useState } from "react";
import ButtonBack from "../../atom/ButtonBack";
import { DataAbout, UserDataForm } from "@/app/type";
import CardComponentInterest from "../../fragmen/card/CardInterest";
import { useAtom } from "jotai/react";
import { atoms, atomsAbout } from "@/app/jotai/atom";
import CardComponentAbout from "../../fragmen/card/CardAbout";
import ContentCard from "../../fragmen/card/ContentCard/ContentCard";
import { ZodiacIcon } from "../../collectionIcons/GetZodiacIcon";
import { HoroscopeIcon } from "../../collectionIcons/GetHoroscopeIcon";
import { age, formatDate } from "@/app/utils/formatDate/formatDate";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default function Profile() {
  const [isEditable, setIsEditable] = useState(false);
  const [dataAbout, setDataAbout] = useAtom<DataAbout[]>(atomsAbout);
  const [selectedImage, setSelectedImage] = useState<string | StaticImport>('');
  const [interesting, setInteresting] = useState(false);
  const [interest] = useAtom(atoms);
  const [file, setFile] = useState<File | null>();
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
      const file = event.target?.files[0];
      const imageUrl = URL.createObjectURL(event.target.files[0]);
      setSelectedImage(imageUrl);
      setDataForm((prev) => ({
        ...prev,
        selectedImage: imageUrl,
      }));
      setFile(file);
    }
  };


  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    setDataAbout(() => {
      const { displayName, gender, date, height, weight, selectedImage, zodiac, horoscope } = dataForm;

      const newDataAbout = {
        displayName,
        gender,
        date,
        height,
        weight,
        selectedImage,
        zodiac,
        horoscope,
      };

      return [newDataAbout];
    }
    );
    setIsEditable(!isEditable)
  };
  return (
    <main className="flex flex-col w-full py-20 space-y-6 overflow-hidden bg-[#09141A]">
      <ButtonBack justify="justify-between">
        <h1>{
          dataAbout.length ?
            dataAbout[0].displayName
            : '@johndoe123'
        }</h1>
        <BsThreeDots size={16} />
      </ButtonBack>
      <div
        className={`min-w-52 ${dataAbout.length ? 'bg-slate-700/20' : ''} mx-3 relative flex flex-col justify-end h-96 rounded-xl text-white bg-center object-contain`}
      >
        {
          dataAbout.length ?

            <div className="absolute w-full h-full">
              <Image src={
                dataAbout[0].selectedImage
              }
                width={50}
                height={30}
                alt={`${dataAbout.length ? 'Image' : 'Image Not Found'}`}
                className="w-full h-full object-cover rounded-xl absolute" />
            </div>
            :
            ''
        }
        {
          dataAbout.length ?
            <span className="bg-gradient-to-t absolute z-20 w-full h-full rounded-xl from-[rgba(0,0,0,0.7)] via-[rgba(0,0,0,0)] to-[rgba(0,0,0,1)]"></span>
            :
            <span className="bg-slate-700/20 flex items-end p-4 rounded-xl w-full h-full">
              <p className="font-bold text-xl">
                @johndoe123
              </p>
            </span>
        }
        <div className="flex flex-col space-y-1 z-30 px-4">
          <h1 className="font-bold text-xl">
            {
              dataAbout.length ?
                `@${dataAbout[0].displayName}, ${age(dataAbout[0].date)}`
                :
                ''
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
                {dataAbout[0].horoscope}
              </p>
              <p
                className="stroke-neutral-600 backdrop-blur-xl w-max flex items-center gap-2 rounded-full px-3 py-2 font-semibold"
              >
                {ZodiacIcon(dataAbout[0].zodiac)}
                {dataAbout[0].zodiac}
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
                      className="rounded-full py-2 px-3 bg-gray-700 text-white text-lg"
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