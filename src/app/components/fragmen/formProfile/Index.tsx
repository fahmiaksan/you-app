import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import React, { useState } from "react"; // Only import useState here
import { getHoroscopeSign, getZodiacSign } from "@/app/utils/data/config";
import { ProfileProps } from "@/app/type";
import InputProfile from "../inputProfile/Index";

export default function FieldProfile({ selectedImage, handleImageChange, setDataForm }: ProfileProps) {
  const [zodiacSign, setZodiacSign] = useState("");
  const [horoscope, setHoroscope] = useState("");
  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newDate = event.target.value;
    setDataForm((prev: any) => ({
      ...prev,
      date: newDate,
    }));
    const newHoroscope = getHoroscopeSign(newDate);
    const newZodiacSign = getZodiacSign(newDate);
    if (newZodiacSign !== "Invalid Date") {
      setZodiacSign(newZodiacSign);
      setHoroscope(newHoroscope);
      setDataForm((prev: any) => ({
        ...prev,
        zodiac: newZodiacSign,
        horoscope: newHoroscope,
      }));
    }
  };
  return (
    <>
      <div className="flex items-center mb-4">
        <input
          type="file"
          accept=".jpg,jpeg,.png"
          onChange={handleImageChange}
          className="hidden"
          id="file-upload"
          required
        />
        <label htmlFor="file-upload" className="w-16 h-16 rounded-xl bg-slate-500/30 flex justify-center items-center cursor-pointer object-cover bg-center">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-cover rounded-xl"
              width={100}
              height={100}
            />
          ) : (
            <FaPlus className="text-xl text-[#d9d9d9]" />
          )}</label>
        <span className="ml-3 text-white font-semibold">Add image</span>
      </div>
      <InputProfile title="Display Name">
        <input
          type="text"
          id="Display Name"
          name="Display Name"
          placeholder="Enter name"
          required
          onChange={(e) => setDataForm((prev: any) => ({ ...prev, displayName: e.target.value }))}
          className="w-full ring-1 ring-slate-600 p-2 rounded-md bg-gray-800 text-right placeholder:text-white text-white focus-within:ring-slate-600 outline-none appearance-none"
        />
      </InputProfile>
      <InputProfile title="Gender">
        <select
          id="Gender"
          name="Gender"
          className="w-full text-white ring-slate-600 p-2 ring-1 rounded-md bg-gray-800 text-right"
          required
          // onChange={setDataForm((prev: any) => ({...prev, gender: }))}
          onChange={(e) => setDataForm((prev: any) => ({ ...prev, gender: e.target.value }))}
        >
          <option value="Select Gender" hidden>Select Gender</option>
          <option value="Male" >Male</option>
          <option value="Female" >Female</option>
        </select>
      </InputProfile>
      <InputProfile title="Birthday">
        <input type="date"
          id="Birthday" name="Birthday" onChange={handleDateChange} placeholder="DD MM YY" className="w-full p-2 rounded-md ring-1 text-white outline-none bg-gray-800 text-right placeholder:text-white ring-slate-600"
          required
        />
      </InputProfile>
      <InputProfile title="Horoscope">
        <input
          type="text"
          id="Horoscope"
          name="Horoscope"
          value={
            horoscope
          }
          disabled
          required
          className="w-full ring-1 ring-slate-600 p-2 rounded-md bg-gray-800 text-right placeholder:text-white text-white focus-within:ring-slate-600 outline-none appearance-none"
        />
      </InputProfile>
      <InputProfile title="Zodiac">
        <input
          type="text"
          id="Zodiac"
          name="Zodiac"
          value={
            zodiacSign ? zodiacSign : "--"
          }
          disabled
          required
          className="w-full ring-1 text-white ring-slate-600 p-2 rounded-md bg-gray-800 text-right placeholder:text-white focus-within:ring-slate-600 outline-none appearance-none"
        />
      </InputProfile>
      <InputProfile title="Height">
        <input
          type="number"
          id="Height"
          name="Height"
          placeholder="Add height"
          required
          onChange={(e) => setDataForm((prev: any) => ({ ...prev, height: e.target.value }))}
          className="w-full ring-1 placeholder:text-white text-white ring-slate-600 p-2 rounded-md bg-gray-800 text-right focus-within:ring-slate-600 outline-none appearance-none"
        />
      </InputProfile>
      <InputProfile title="Weight">
        <input
          type="number"
          id="Weight"
          name="Weight"
          placeholder="Add weight"
          required
          onChange={(e) => setDataForm((prev: any) => ({ ...prev, weight: e.target.value }))}
          className="w-full placeholder:text-white text-white ring-1 ring-slate-600 p-2 rounded-md bg-gray-800 text-right focus-within:ring-slate-600 outline-none appearance-none"
        />
      </InputProfile>
      <button type="submit" className="absolute text-gray-500 top-5 right-3 text">Save and Update</button>
    </>
  )
};