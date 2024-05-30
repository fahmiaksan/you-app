import { ContentCardPropsAbout } from "@/app/type";
import { PiPencilSimpleLine } from "react-icons/pi";
import FieldProfile from "../formProfile/Index";
import React, { useRef } from "react";

export default function CardComponentAbout({ title, isEditable, setIsEditable, children, submitHandler, handleImageChange, selectedImage, setDataForm, }: ContentCardPropsAbout) {
  const ref = useRef(null);
  return (
    <div className="bg-slate-700/20 px-5 py-5 mx-3 rounded-xl space-y-6 relative">
      <div className="flex justify-between">
        <h1 className="text-xl text-white font-semibold">{title}</h1>
        {
          !isEditable &&
          <PiPencilSimpleLine
            size={20}
            cursor={"pointer"}
            color="white"
            onClick={() => {
              setIsEditable(!isEditable)
            }} />
        }
      </div>
      <div className="space-y-4">
        {
          !isEditable ?
            children
            :
            <form className="flex flex-col w-full" onSubmit={submitHandler}>
              <FieldProfile
                handleImageChange={handleImageChange}
                selectedImage={selectedImage}
                setDataForm={setDataForm}
              />

            </form>
        }
      </div>
    </div>
  )
};
