import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest){
    return NextResponse.json({
        email:"pranav@1212",
        name:"Pranav"
    })
}
export async function POST(req: NextRequest){
    const body = await req.json();
    console.log("Request body:", body);

    return NextResponse.json({
      message:"you are  signed up"
    })
}