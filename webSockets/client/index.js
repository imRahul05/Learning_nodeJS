
const socket = new WebSocket("ws://localhost:8080");

// When connection is open
socket.addEventListener("open", () => {
  console.log("Connected to server");
  socket.send("Hello from client!");
});

// When a message is received
socket.addEventListener("message", (event) => {
  console.log("Message from server:", event.data);
});

// When connection closes
socket.addEventListener("close", () => {
  console.log("Disconnected from server");
});
