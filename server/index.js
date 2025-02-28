import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/users.js";
import productRoute from "./routes/product.js";
import privacyRoute from "./routes/privacy.js";
import supplierRoute from "./routes/supplier.js";
import strengthRoute from "./routes/strength.js";
import bannerRoute from "./routes/banner.js";
import blogsRoute from "./routes/blogs.js";
import missionRoute from "./routes/mission.js";
import visionRoute from "./routes/vision.js";
import supportRoute from "./routes/support.js";

import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
app.use("/public/uploads", express.static("public/uploads"));

dotenv.config();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  autoIndex: true,
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
  family: 4,
};
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, options);
    console.log("successfully connect with mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});
app.use(cookieParser());
app.use(express.json());
app.use(cors());

app.use("/api/users", usersRoute);
app.use("/api/product", productRoute);
app.use("/api/privacy", privacyRoute);
app.use("/api/supplier", supplierRoute);
app.use("/api/banner", bannerRoute);
app.use("/api/strength", strengthRoute);
app.use("/api/blogs", blogsRoute);
app.use("/api/mission", missionRoute);
app.use("/api/vision", visionRoute);
app.use("/api/support", supportRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";

  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(process.env.PORT, () => {
  connect();
  console.log("connect with backend");
});
