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
    if (!request.ok) throw new Error('Your data not found');
    const data = await request.json();
    cookies().set('auth-token', data?.access_token, { httpOnly: true });
    const local = JSON.stringify({ token: `${data.access_token}` })
    localStorage.setItem('auth-token', local);
    console.log(cookies().get('auth-token'));
    return NextResponse.json({ data })
  } catch (error) {
    console.log(error);
  }
}