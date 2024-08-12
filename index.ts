import express from "express";
import dotenv from "dotenv";
import mainRouter from "./routes/main.route";
import connectDb from "./utils/connectDb";
dotenv.config();

connectDb();

const port = process.env.PORT || 4001;
const app = express();

app.use(express.json());

app.use(mainRouter);

app.listen(port, () =>
  console.log(`Server started at : http://localhost:${port}/`)
);
