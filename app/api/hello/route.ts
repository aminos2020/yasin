// pages/api/esp-data.js
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
let io; // Declare the Socket.IO instance
export async function GET() {
  return NextResponse.json({ message: "Hello, yasin" });
}

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json();
    console.log(data);
    fs.writeFileSync("data.json", JSON.stringify(data));
    // if (!io) {
    //   const server = new Server(res.socket.server);
    //   io = server;

    //   io.on("connection", (socket) => {
    //     console.log("Client connected");

    //     socket.on("disconnect", () => {
    //       console.log("Client disconnected");
    //     });
    //   });
    // }
    // io.emit("new-data", data); // Use io to emit the even
    console.log("data is", data);
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "An error occurred" }, { status: 500 });
  }
}
