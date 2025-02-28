import mongoose from "mongoose";

const Vission = new mongoose.Schema(
  {
    desc: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Vission", Vission);
