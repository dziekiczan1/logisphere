import mongoose from "mongoose";
import LoadDetail from "../models/loadDetail.js";

export const getLoads = async (req, res) => {
  try {
    const loadDetails = await LoadDetail.find();

    res.status(200).json(loadDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addLoad = async (req, res) => {
  const load = req.body;

  const newLoad = new LoadDetail(load);

  try {
    await newLoad.save();
    res.status(201).json(newLoad);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateLoad = async (req, res) => {
  const { id: _id } = req.params;
  const load = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No loads with that id");

  const updatedLoad = await LoadDetail.findByIdAndUpdate(
    _id,
    { ...load, _id },
    {
      new: true,
    }
  );

  res.json(updatedLoad);
};
