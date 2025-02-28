import mongoose from "mongoose";

const SupplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Supplier", SupplierSchema);
