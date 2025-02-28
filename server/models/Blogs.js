import mongoose from "mongoose";

const Blogs = new mongoose.Schema(
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
    contents: [
      {
        title: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
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

export default mongoose.model("Blogs", Blogs);
