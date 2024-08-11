import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.route";
import connectDb from "./utils/connectDb";
dotenv.config();

connectDb();

const port = process.env.PORT || 4001;
const app = express();

app.use(express.json());

app.use("/api/auth/", authRouter);

app.listen(port, () =>
  console.log(`Server started at : http://localhost:${port}/`)
);
