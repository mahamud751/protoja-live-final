import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    desc: {
      type: String,
    },
    link: {
      type: String,
    },
    photos: {
      type: [String],
    },
    services: [
      {
        title: {
          type: String,
        },
      },
    ],
    contents: [
      {
        title: {
          type: String,
        },
        description: {
          type: String,
        },
        images: {
          type: [String],
          default: [],
        },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Product", ProductSchema);
