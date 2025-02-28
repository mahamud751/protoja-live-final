import Strength from "../models/Strength.js";
export const CreateStrength = async (req, res, next) => {
  const newStrength = new Strength(req.body);
  try {
    const strength = await newStrength.save();
    res.status(200).json(strength);
  } catch (err) {
    next(err);
  }
};
export const getStrength = async (req, res, next) => {
  try {
    const strength = await Strength.find({});
    res.status(200).json(strength);
  } catch (err) {
    next(err);
  }
};
export const getSingleStrength = async (req, res, next) => {
  try {
    const strength = await Strength.findById(req.params.id);
    res.status(200).json(strength);
  } catch (err) {
    next(err);
  }
};
export const deleteStrength = async (req, res, next) => {
  try {
    const strength = await Strength.findByIdAndDelete(req.params.id);
    res.status(200).json(strength);
  } catch (err) {
    next(err);
  }
};

export const updateStrength = async (req, res, next) => {
  try {
    const strength = await Strength.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(strength);
  } catch (err) {
    next(err);
  }
};
