import { NextResponse } from "next/server";

export function GET(){
    return NextResponse.json({
        email:"pranav@1212",
        name:"Pranav"
    })
}