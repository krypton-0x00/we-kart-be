import jwt, { JwtPayload } from "jsonwebtoken";
import User from "../models/user.model";

const protectRoute = async (req: any, res: any, next: any) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as JwtPayload;
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ message: "Unauthorized - User Not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    console.log("[+] Error occured in protectRoute middleware", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
