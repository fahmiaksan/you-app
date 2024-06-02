import { NextRequest, NextResponse } from "next/server";

export async function register(req: any) {
  try {
    const request = await fetch('https://techtest.youapp.ai/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: req,
    });
    const data = await request.json();
    if (!request.ok) return NextResponse.json({
      status: 500,
      message: 'error',
    })
    return NextResponse.json({
      status: 200,
      message: 'success',
      data: data
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: 'error',
    })
  }
}