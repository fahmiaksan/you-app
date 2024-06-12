'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthLayoutsProps } from "@/app/type";
import ButtonBack from "../../atom/ButtonBack";

export default function AuthLayout({ children, submitHandler, path }: AuthLayoutsProps) {
  const pathname = usePathname();
  return (
    <div className="text-white w-full flex flex-col overflow-hidden mx-auto h-screen z-10 bg-three-gradient-color relative">
      <span className="absolute h-[95vw] w-[60vh] min-w-[350px] top-0 blur-[100px] left-20 bg-[#1F4247] z-0"></span>
      <ButtonBack />
      <div className="px-6 mt-14 z-10">
        <p className="text-xl px-5 mb-4 font-bold cursor-pointer w-max">{path}</p>
        <form className="space-y-4 mb-12" onSubmit={submitHandler}>
          {children}
        </form>
        <div className="w-full text-center ">
          <p className="text-base">
            {
              pathname === "/login" ? "No account?" : "Have an account?"
            } <Link href={pathname === "/login" ? "/register" : "/login"} className="text-[#F5A524] underline">
              {
                pathname === "/login" ? "Register here" : "Login here"
              }
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
};
