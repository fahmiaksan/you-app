'use client';
import InputAuth from "@/app/components/auth/inputAuth/Index";
import React, { useState } from "react";
import AuthLayout from "@/app/components/layouts/authLayout/Index";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
export default function RegisterPage() {
  const [valid, setValid] = useState(false);
  const [visible, setVisible] = useState({
    confirmPassword: true,
    password: true,
  });
  const changeHandler = (e: any) => {
    if (e.target.value.length > 3) {
      setValid(true);
    } else {
      setValid(false);
    }
  }

  const submitHandler = (e: any) => {
    e.preventDefault()
  }
  return (
    <AuthLayout valid={valid} submitHandler={submitHandler} path="Register">
      <InputAuth
        placeholder="Enter Username/Email"
        type='email'
        changeHandler={changeHandler}
      />
      <InputAuth
        placeholder="Create Username"
        type='email'
        changeHandler={changeHandler}
      />
      <div className="relative">
        <InputAuth
          placeholder="Enter Password"
          type={
            visible.password ? 'password' : 'text'
          }
          changeHandler={changeHandler}
        />
        {visible.password ?
          <IoEyeOffOutline size={25} onClick={() => setVisible({ ...visible, password: !visible.password })} className="absolute right-0 mr-4 top-[25%]"
            color="black" />
          : <IoEyeOutline size={25}
            onClick={() => setVisible({ ...visible, password: !visible.password })} className="cursor-pointer absolute right-0 mr-4 top-[25%]" color="black" />
        }
      </div>
      <div className="relative">
        <InputAuth
          placeholder="Confirm Password"
          type={
            visible.confirmPassword ? 'password' : 'text'
          }
          changeHandler={changeHandler}
        />
        {visible.confirmPassword ?
          <IoEyeOffOutline size={25} onClick={() => setVisible({ ...visible, confirmPassword: !visible.confirmPassword })} className="absolute right-0 mr-4 top-[25%]"
            color="black" />
          : <IoEyeOutline size={25}
            onClick={() => setVisible({ ...visible, confirmPassword: !visible.confirmPassword })} className="cursor-pointer absolute right-0 mr-4 top-[25%]" color="black" />
        }
      </div>
    </AuthLayout>
  )
};
