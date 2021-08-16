import { useState } from "react";
import "./App.css";

import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:3000";

function App() {
  const userId = "60f07d868f7a27bf4e4ab08a";
  var socket = socketClient(SERVER);
  socket.on(userId, (order) => {
    console.log(order);
  });

  return <div className="App"></div>;
}

export default App;
