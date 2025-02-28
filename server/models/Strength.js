import mongoose from "mongoose";

const StrengthSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    desc: {
      type: String,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Strength", StrengthSchema);
