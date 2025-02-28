import Supplier from "../models/Supplier.js";
export const CreateSupplier = async (req, res, next) => {
  const newSupplier = new Supplier(req.body);
  try {
    const supplier = await newSupplier.save();
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};
export const getSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.find({});
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};
export const getSingleSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findById(req.params.id);
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};
export const deleteSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByIdAndDelete(req.params.id);
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};

export const updateSupplier = async (req, res, next) => {
  try {
    const supplier = await Supplier.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(supplier);
  } catch (err) {
    next(err);
  }
};
