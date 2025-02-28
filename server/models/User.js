import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      enum: ["SuperAdmin", "admin", "user", "manager", "partner"],
      default: "user",
    },
    userStatus: {
      type: String,
      enum: ["Active", "Deactive", "Blocked"],
      default: "Active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
