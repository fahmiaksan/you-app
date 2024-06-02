'use client';
import InputAuth from "@/app/components/auth/inputAuth/Index";
import React, { useEffect, useState } from "react";
import AuthLayout from "@/app/components/layouts/authLayout/Index";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { register } from "@/app/api/register/register";
import { useRouter } from "next/navigation";
export default function RegisterPage() {
  const [valid, setValid] = useState(false);
  const [visible, setVisible] = useState({
    confirmPassword: true,
    password: true,
  });
  const router = useRouter();
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const local = localStorage.getItem('auth-token');
  const { replace } = useRouter();
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setEmail(e.target.value);
    }
  }

  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setUsername(e.target.value);
      if (e.target.value.length < 3) {
        setValid(true);
      }
      if (e.target.value.length > 10) {
        setValid(false);
      }
    }
  }

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setPassword(e.target.value);
      if (e.target.value.length < 3) {
        setValid(true);
      }
      if (e.target.value.length > 10) {
        setValid(false);
      }
    }
  }

  const confirmpasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      if (e.target.value === password) {
        setValid(true);
      }
    }
  }

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const json = JSON.stringify({ email, username, password });
      const registerUser = await register(json);
      if (!registerUser.ok) setLoading(false);
      if (registerUser.ok) setLoading(false);
      replace('/login');
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (local) {
      router.back();
    }
  }, []);

  return (
    <AuthLayout valid={valid} isLoading={loading} submitHandler={submitHandler} path="Register">
      <InputAuth
        placeholder="Enter Email"
        type='email'
        id="email"
        changeHandler={emailHandler}
      />
      <InputAuth
        id="username"
        placeholder="Create Username"
        type='text'
        changeHandler={usernameHandler}
      />
      <div className="relative">
        <InputAuth
          placeholder="Enter Password"
          type={
            visible.password ? 'password' : 'text'
          }
          id="password"
          changeHandler={passwordHandler}
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
          changeHandler={confirmpasswordHandler}
          id="password"

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
