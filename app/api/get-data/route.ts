// pages/api/get-data.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    // Read data from the JSON file
    const dataBuffer = fs.readFileSync("data.json");
    const data = JSON.parse(dataBuffer.toString());
    console.log("data is", data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
