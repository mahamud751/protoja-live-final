import Vision from "../models/Vision.js";
export const CreateVision = async (req, res, next) => {
  const newVision = new Vision(req.body);
  try {
    const vision = await newVision.save();
    res.status(200).json(vision);
  } catch (err) {
    next(err);
  }
};
export const getVision = async (req, res, next) => {
  try {
    const vision = await Vision.find({});
    res.status(200).json(vision);
  } catch (err) {
    next(err);
  }
};
export const getSingleVision = async (req, res, next) => {
  try {
    const vision = await Vision.findById(req.params.id);
    res.status(200).json(vision);
  } catch (err) {
    next(err);
  }
};
export const deleteVision = async (req, res, next) => {
  try {
    const vision = await Vision.findByIdAndDelete(req.params.id);
    res.status(200).json(vision);
  } catch (err) {
    next(err);
  }
};

export const updateVision = async (req, res, next) => {
  try {
    const vision = await Vision.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(vision);
  } catch (err) {
    next(err);
  }
};
