// pages/api/get-data.ts
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const dataBuffer = await fs.readFile("data.json");
    const data = JSON.parse(dataBuffer.toString());
    console.log("data is", data);
    const response = NextResponse.json(data);
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const data = await req.json();
    console.log("Received data:", data);
    await fs.writeFile("data.json", JSON.stringify(data, null, 2));
    const response = NextResponse.json({
      message: "Data received and saved successfully",
    });
    response.headers.set("Access-Control-Allow-Origin", "*");
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
