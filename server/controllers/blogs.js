import Blogs from "../models/Blogs.js";
export const CreateBlogs = async (req, res, next) => {
  const newBlogs = new Blogs(req.body);
  try {
    const blogs = await newBlogs.save();
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.find({});
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
export const getSingleBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.findById(req.params.id);
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
export const deleteBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.findByIdAndDelete(req.params.id);
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};

export const updateBlogs = async (req, res, next) => {
  try {
    const blogs = await Blogs.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(blogs);
  } catch (err) {
    next(err);
  }
};
