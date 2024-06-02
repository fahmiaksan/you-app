'use client';
import React, { FormEvent, useState } from "react";
import ButtonBack from "../../components/atom/ButtonBack";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai/react";
import { atoms } from "@/app/jotai/atom";

export default function InterestingPage() {
  const [tags, setTags] = useState<string[]>([]);
  const [input, setInput] = useState<string>('');
  const { replace } = useRouter();
  const [interest, setInterest] = useAtom(atoms);
  const addInterest = () => {
    if (input.trim() !== '' && !tags.includes(input.trim())) {
      setInterest((prev: any) => [
        ...prev,
        input.trim(),
      ])
      setTags([...tags, input.trim()]);
      setInput('');
    }
  };

  const removeInterest = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addInterest();
    }
  };

  const handleInterestContext = () => {
    replace('/profile');
  };
  return (
    <div className="relative text-white w-full flex flex-col overflow-hidden mx-auto h-screen z-10 bg-three-gradient-color">
      <span className="absolute h-[95vw] w-[60vh] min-w-[350px] top-0 blur-[100px] left-20 bg-[#1F4247] z-0"></span>
      <ButtonBack
        justify="justify-between"
      >
        <p
          onClick={handleInterestContext}
          className="cursor-pointer text-base"
        >Save and update</p>
      </ButtonBack>
      <h2 className="z-10 mb-3 mt-16 font-medium text-lg mx-8">Tell everyone about yourself</h2>
      <h1 className="z-10 mx-8 mb-8 font-semibold text-2xl">What interest you?</h1>
      <div className="z-10 mx-6">
        <input
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          placeholder="Enter your interest"
          className='p-4 w-full text-base rounded-xl bg-[#1F4247] appearance-none outline-none ring-0 border-none shadow-small overflow-auto mb-4 max-h-max mx-3'
        />
        <div className="flex gap-x-1 gap-y-2 w-full flex-wrap ">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`p-2 m-1 gap-x-2 rounded-lg bg-gray-700 text-white flex items-center left-${tag.length + 2}`}
            >
              {tag}
              <button
                onClick={() => removeInterest(tag)}
                className="cursor-pointer"
              >
                x
              </button>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
};
