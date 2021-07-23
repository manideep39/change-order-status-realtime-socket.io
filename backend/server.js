var app = require("express")();
var http = require("http").createServer(app);
const PORT = 8080;
var io = require("socket.io")(http);

const socket = io.on("connection", (socket) => {
  return socket;
});

let orderStatus = 1;
app.post("/:orderId/:statusCode", (req, res) => {
  const restaurantId = req.params.orderId;
  const statusCode = req.params.statusCode;
  orderStatus = statusCode;

  socket.emit(`${restaurantId}`, orderStatus);
  res.send(`Order Status: ${orderStatus}`);
});

http.listen(PORT, () => {
  console.log(`listening on *:${PORT}`);
});
