'use client';
import InputAuth from "@/app/components/auth/inputAuth/Index";
import React, { useState } from "react";
import AuthLayout from "@/app/components/layouts/authLayout/Index";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
export default function LoginPage() {
  const [valid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);
  const changeHandler = (e: any) => {
    if (e.target.value) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
  }
  return (
    <AuthLayout valid={valid} submitHandler={submitHandler} path="Login">
      <InputAuth
        placeholder="Enter Username/Email"
        type='email'
        changeHandler={changeHandler}
      />
      <div className="relative">
        <InputAuth
          placeholder="Enter Password"
          type={
            visible ? 'password' : 'text'
          }
          changeHandler={changeHandler}
        />
        {visible ?
          <IoEyeOffOutline size={25} onClick={() => setVisible(!visible)} className="absolute right-0 mr-4 top-[25%]"
            color="black" />
          : <IoEyeOutline size={25}
            onClick={() => setVisible(!visible)} className="cursor-pointer absolute right-0 mr-4 top-[25%]" color="black" />
        }
      </div>
    </AuthLayout>
  )
};
