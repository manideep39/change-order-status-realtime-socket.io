import { useState } from "react";
import "./App.css";

import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";

function App() {
  const [order, setOrder] = useState({});
  const [userId] = useState("Manideep");

  var socket = socketClient(SERVER);
  socket.on(userId, (order) => {
    console.log(order);
    setOrder(order);
  });

  return (
    <div className="App">
      <h1>Client 1</h1>
      <h2>
        User Name: <span style={{ color: "blue" }}>{order.userId}</span>
      </h2>
      <h3>
        Order Id: <span style={{ color: "orange" }}>{order.orderId}</span>
      </h3>
      <h3>
        Order Status:
        <span style={{ color: "red" }}>{order.orderStatus}</span>
      </h3>
    </div>
  );
}

export default App;
