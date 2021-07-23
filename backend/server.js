var app = require("express")();
var http = require("http").createServer(app);
const PORT = 8080;
var io = require("socket.io")(http);

const socket = io.on("connection", (socket) => {
  return socket;
});

let orders = [
  { orderId: "123", userId: "Manideep", orderStatus: 0 },
  { orderId: "191", userId: "Manideep", orderStatus: 0 },
  { orderId: "456", userId: "Shubham", orderStatus: 0 },
  { orderId: "789", userId: "Shubham", orderStatus: 0 },
];

app.post("/:orderId/:statusCode", (req, res) => {
  const orderId = req.params.orderId;
  const statusCode = req.params.statusCode;
  let targetOrder;

  orders = orders.map((order) => {
    if (order.orderId === orderId) {
      targetOrder = {
        userId: order.userId,
        orderStatus: statusCode,
        orderId,
      };
      return { ...order, orderStatus: statusCode };
    } else {
      return order;
    }
  });

  if (targetOrder) socket.emit(`${targetOrder.userId}`, targetOrder);

  res.send({ status: "ok" });
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
