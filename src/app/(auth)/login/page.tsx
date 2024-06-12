'use client';
import React, { useEffect, useState } from "react";
import AuthLayout from "@/app/components/layouts/authLayout/Index";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import ButtonAuth from "@/app/components/auth/buttonAuth/Button";
import { login } from "@/app/api/login/login";

interface IFormInput {
  email: string;
  username: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  username: Yup.string().min(3).max(50).required('Username is required'),
  password: Yup.string().min(3).max(50).required('Password is required'),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data : IFormInput, errors : any) => {
      try {
      const toJSON = JSON.stringify({
        email: data.email,
        username: data.username,
        password: data.password,
      });
      await login(toJSON);
    } catch (error) {
      console.log(errors);
    }
  }
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  return (
    <AuthLayout submitHandler={handleSubmit((data) => onSubmit({...data}, errors))} path="Login">
      <input 
      type='email' 
      placeholder='Enter Email'
      className='p-4 w-full text-base rounded-xl bg-[#1F4247] appearance-none outline-none ring-0 border-none shadow-small overflow-auto' 
      {...register('email')}
      />
      <input 
      type='text'
      placeholder='Enter your username'
      className='p-4 w-full text-base rounded-xl bg-[#1F4247] appearance-none outline-none ring-0 border-none shadow-small overflow-auto' 
      {...register('username')}
      />
      <div className="relative">
        <input  
        type={
          visible ? 'text' : 'password'
        }
        placeholder='Enter your password'
        className='p-4 w-full text-base rounded-xl bg-[#1F4247] appearance-none outline-none ring-0 border-none shadow-small overflow-auto'
        {...register('password')}
        />
        {!visible ?
          <IoEyeOffOutline size={25} onClick={() => setVisible(!visible)} className="absolute right-0 mr-4 top-[25%]"
            color="black" />
          : <IoEyeOutline size={25}
            onClick={() => setVisible(!visible)} className="cursor-pointer absolute right-0 mr-4 top-[25%]" color="black" />
        }
      </div>
      <ButtonAuth
      valid={
        errors?.email || errors?.username || errors?.password ? false : true
      } 
      isLoading={loading}
       />
    </AuthLayout>
  )
};