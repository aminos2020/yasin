// pages/api/get-data.js
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

export async function GET(req, res) {
  try {
    // Read data from the JSON file
    const data = JSON.parse(fs.readFileSync("data.json"));
    console.log("data is", data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
