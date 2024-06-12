import { StaticImport } from "next/dist/shared/lib/get-img-props";
import React, { Dispatch } from "react";

export type ProfileProps = {
  selectedImage: string | null;
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined;
  setDataForm: Dispatch<React.SetStateAction<UserDataForm>>;
}


export type UserDataForm = {
  displayName: string;
  gender: string;
  date: string;
  height: number;
  weight: number;
  selectedImage: any;
  zodiac: string;
  horoscope: string;
};

interface CardComponentProps {
  title: string,
  children?: React.ReactNode,
  submitHandler?: (event: React.FormEvent<HTMLFormElement>) => void | undefined,
  handleImageChange?: (event: React.ChangeEvent<HTMLInputElement>) => void | undefined,
  selectedImage?: string | null | StaticImport,
  setDataForm?: Dispatch<React.SetStateAction<UserDataForm>>
}

export interface CardComponentPropsInterest extends CardComponentProps {
  interest: boolean,
  setInterest: (interest: boolean) => void
}

export interface ContentCardPropsAbout extends CardComponentProps {
  isEditable: boolean
  setIsEditable: (isEditable: boolean) => void;
}

export interface FormProps {
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void
  handleImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  selectedImage: string | null | undefined
  setDataForm: Dispatch<React.SetStateAction<UserDataForm>>
}
export type DataAbout = {
  displayName: '',
  gender: '',
  date: '',
  height: 0,
  weight: 0,
  selectedImage: null,
  zodiac: '',
  horoscope: '',
};

export type ContentCardProps = {
  label: string;
  value: string | number;
}

export type ZodiacSignValue = {
  [key: string]: { start: string; end: string }
}

export type ButtonProps = {
  justify?: string,
  children?: React.ReactNode
}

export type InputAuthProps = {
  changeHandler?: React.ChangeEventHandler<HTMLInputElement>,
  placeholder: string, type: string
}

export type AuthLayoutsProps = {
  children: React.ReactNode,
  submitHandler: any,
  path: string,
}