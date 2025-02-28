import Mission from "../models/Mission.js";
export const CreateMission = async (req, res, next) => {
  const newMission = new Mission(req.body);
  try {
    const mission = await newMission.save();
    res.status(200).json(mission);
  } catch (err) {
    next(err);
  }
};
export const getMission = async (req, res, next) => {
  try {
    const mission = await Mission.find({});
    res.status(200).json(mission);
  } catch (err) {
    next(err);
  }
};
export const getSingleMission = async (req, res, next) => {
  try {
    const mission = await Mission.findById(req.params.id);
    res.status(200).json(mission);
  } catch (err) {
    next(err);
  }
};
export const deleteMission = async (req, res, next) => {
  try {
    const mission = await Mission.findByIdAndDelete(req.params.id);
    res.status(200).json(mission);
  } catch (err) {
    next(err);
  }
};

export const updateMission = async (req, res, next) => {
  try {
    const mission = await Mission.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(mission);
  } catch (err) {
    next(err);
  }
};
