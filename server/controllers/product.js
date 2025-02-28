import Product from "../models/Product.js";
export const CreateProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const category = await newProduct.save();
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
export const getProduct = async (req, res, next) => {
  try {
    const category = await Product.find({});
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
export const getSingleProduct = async (req, res, next) => {
  try {
    const category = await Product.findById(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
export const deleteProduct = async (req, res, next) => {
  try {
    const category = await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const category = await Product.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(category);
  } catch (err) {
    next(err);
  }
};
