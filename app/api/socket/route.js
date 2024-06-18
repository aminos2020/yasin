// // pages/api/socket.js
// import { Server } from "socket.io";
// import * as Socket from "socket.io";
// export default function handler(req, res) {
//   if (!res.socket.server.io) {
//     console.log("Setting up socket.io");
//     const io = new Server(res.socket.server);
//     res.socket.server.io = io;

//     io.on("connection", (socket) => {
//       console.log("Client connected");

//       socket.on("disconnect", () => {
//         console.log("Client disconnected");
//       });
//     });
//   }
//   res.end();
// }
