import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI || "");
    console.log("[+] connected to db");
  } catch (error) {
    console.log("[x] error connecting to db", error);
    process.exit(0);
  }
};
export default connectDb;
