import { ButtonProps } from "@/app/type";
import { IoChevronBackOutline } from "react-icons/io5";

export default function ButtonBack({ justify, children }: ButtonProps) {
  return (
    <div className={`mt-10 mx-4 font-bold text-white flex items-center z-10 ${justify}`}>
      <div className="flex items-center">
        <IoChevronBackOutline color="white" size={24} />
        <p className="text-base">Back</p>
      </div>
      {children}
    </div>
  )
};
