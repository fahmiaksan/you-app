'use client';
import InputAuth from "@/app/components/auth/inputAuth/Index";
import React, { useEffect, useState } from "react";
import AuthLayout from "@/app/components/layouts/authLayout/Index";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { login } from "@/app/api/login/login";
import { useRouter } from "next/navigation";
export default function LoginPage() {
  const [valid, setValid] = useState(false);
  const [visible, setVisible] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const local = localStorage.getItem('auth-token');
  const router = useRouter()
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value !== '') {
      setEmail(e.target.value);
    }
  }

  useEffect(() => {
    if (local) {
      router.back();
    }
  }, []);

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


  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password, username);
    setLoading(true);
    try {
      const jsonData = JSON.stringify({ email, username, password });
      await login(jsonData);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    router.push('/profile/interesting');
  }
  return (
    <AuthLayout valid={valid} submitHandler={submitHandler} path="Login" isLoading={loading}>
      <InputAuth
        placeholder="Enter Email"
        type='email'
        changeHandler={emailHandler}
        id="email"
      />
      <InputAuth
        placeholder="Enter Username"
        type='text'
        changeHandler={usernameHandler}
        id="username"
      />
      <div className="relative">
        <InputAuth
          placeholder="Enter Password"
          type={
            visible ? 'password' : 'text'
          }
          id="password"
          changeHandler={passwordHandler}
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
