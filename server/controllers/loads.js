import mongoose from "mongoose";
import LoadDetail from "../models/loadDetail.js";

export const getLoad = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await LoadDetail.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLoads = async (req, res) => {
  try {
    const loadDetails = await LoadDetail.find();

    res.status(200).json(loadDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLoadsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  console.log(req.query);
  try {
    console.log(searchQuery);
    const title = new RegExp(searchQuery, "i");
    const loads = await LoadDetail.find({ title });
    console.log(loads);
    res.json({ data: loads });
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

export const deleteLoad = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No loads with that id");

  await LoadDetail.findByIdAndRemove(id);
  res.json({ message: "Load removed" });
};
