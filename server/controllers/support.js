import Support from "../models/Support.js";
export const CreateSupport = async (req, res, next) => {
  const newSupport = new Support(req.body);
  try {
    const support = await newSupport.save();
    res.status(200).json(support);
  } catch (err) {
    next(err);
  }
};
export const getSupport = async (req, res, next) => {
  try {
    const support = await Support.find({});
    res.status(200).json(support);
  } catch (err) {
    next(err);
  }
};
export const getSingleSupport = async (req, res, next) => {
  try {
    const support = await Support.findById(req.params.id);
    res.status(200).json(support);
  } catch (err) {
    next(err);
  }
};
export const deleteSupport = async (req, res, next) => {
  try {
    const support = await Support.findByIdAndDelete(req.params.id);
    res.status(200).json(support);
  } catch (err) {
    next(err);
  }
};

export const updateSupport = async (req, res, next) => {
  try {
    const support = await Support.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(support);
  } catch (err) {
    next(err);
  }
};
