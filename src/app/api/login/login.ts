'use server'
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function login(req: any) {
  try {
    const request = await fetch('https://techtest.youapp.ai/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'accept': '*/*'
      },
      body: req,
    });
    const data = await request.json();
    const token = await data?.access_token
    localStorage.setItem('auth-token', req);
    if (!request.ok) console.log('Your data not found');
    cookies().set('auth-token', token, { httpOnly: true });
    return NextResponse.json({ data })
  } catch (error) {
    console.log(error);
  }
}