const WebSocket = require("ws");

// Create WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("Client connected");

  // Receive message from client
  ws.on("message", (message) => {
    console.log("Received:", message.toString());

    // Reply back
    ws.send(`Server says: ${message}`);
  });

  // When client disconnects
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});
