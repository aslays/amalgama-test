"use strict";

var io = require("socket.io")();

io.use(function (socket, next) {
  if (socket.handshake.query && socket.handshake.query.token) {
    console.log("New Socket: " + socket.id);
    return next();
  } else {
    console.log("Authentication error - Socket Unauthorized");
    return next(new Error("Authentication error - Unauthorized"));
  }
});
io.on("connection", function (socket) {});
module.exports = io;