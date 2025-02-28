import mongoose from "mongoose";
const SupportSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

export default mongoose.model("Support", SupportSchema);
