import { useState } from "react";
import "./App.css";

import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";

function App() {
  const [orderStatus, setOrderStatus] = useState(0);
  const [orderId] = useState("abc");

  var socket = socketClient(SERVER);
  socket.on(orderId, (newOrderStatus) => {
    setOrderStatus(newOrderStatus);
  });

  return (
    <div className="App">
      <h1>Client 2</h1>
      <h2>
        Order Id: <span style={{ color: "blue" }}>{orderId}</span>
      </h2>
      <h3>
        Order Status:
        <span style={{ color: "red" }}>{orderStatus}</span>
      </h3>
    </div>
  );
}

export default App;
