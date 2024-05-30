import { CardComponentPropsInterest } from "@/app/type";
import { PiPencilSimpleLine } from "react-icons/pi";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

export default function CardComponentInterest({ title, children, selectedImage, interest, setInterest }: CardComponentPropsInterest) {
  const { replace } = useRouter();
  return (
    <div className="bg-slate-700/20 px-5 py-5 mx-3 rounded-xl space-y-6 relative">
      <div className="flex justify-between">
        <h1 className="text-xl text-white font-semibold">{title}</h1>
        {
          !interest &&
          <PiPencilSimpleLine
            size={20}
            cursor={"pointer"}
            color="white"
            onClick={() => {
              setInterest(!interest)
              replace('/profile/interesting')
            }} />
        }
      </div>
      <div className="space-y-4">
        {
          children
        }
      </div>
    </div>
  )
};
