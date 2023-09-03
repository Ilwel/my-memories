import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){
  const { searchParams } = req.nextUrl
  console.log(searchParams.get("var"))
  return NextResponse.json({ message: "Hello World" })
}