import express from "express";
import "dotenv/config";
import { connectedToDB } from "./configs/db.config.js";
import morgan from "morgan";
import { accessLogStream } from "./middleware/logger.midleware.js";
import { userRouter } from "./routes/user.routes.js";
import { vehicleRouter } from "./routes/vehicle.routes.js";
const app = express();
app.use(express.json());

app.use(morgan('combined', { stream: accessLogStream }))
//test route
app.use('/test',(req, res) => {
  res.status(200).json({ msg: "Testing route" });
});

app.use('/api/user',userRouter)
app.use('api/vehicle',vehicleRouter)
// All invalid routes
app.use((req, res) => {
  res.status(404).json({ msg: "Invalid route" });
});

const PORT =8000;

// Starting the port
app.listen(PORT, () => {
  connectedToDB();
  console.log(`server running at PORT`, PORT);
});
