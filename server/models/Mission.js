import mongoose from "mongoose";

const Mission = new mongoose.Schema(
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

export default mongoose.model("Mission", Mission);
