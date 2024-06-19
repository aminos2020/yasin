import { NextRequest, NextResponse } from "next/server";
import { ConnectToDB } from "./../libs/DB";
import EspData, { IEspData } from "./../model/EspData";
export async function GET(req: NextRequest): Promise<NextResponse> {
  await ConnectToDB();
  console.log("db conected get data");
  try {
    const data = await EspData.find<IEspData>({});
    console.log(data);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
export async function POST(req: NextRequest): Promise<NextResponse> {
  await ConnectToDB();
  console.log("db conected POST data");
  try {
    const data = await req.json();
    console.log(data);
    const documents: IEspData[] = Object.entries(data).map(([key, value]) => ({
      key,
      value: value as string,
    })) as IEspData[];

    // Save each document to the database
    await EspData.insertMany(documents);
    return NextResponse.json("data");
  } catch (error) {
    console.error("error", error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
