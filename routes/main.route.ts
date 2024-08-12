import { Router } from "express";
import authRouter from "./auth.route";
import productRouter from "./product.route";

const mainRouter = Router();

mainRouter.use("/api/auth/", authRouter);
mainRouter.use("/api/products/", productRouter);

export default mainRouter;
