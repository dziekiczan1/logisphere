import LoadDetail from "../models/loadDetail.js";

export const getLoads = async (req, res) => {
  try {
    const loadDetails = await LoadDetail.find();

    res.status(200).json(loadDetails);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addLoads = async (req, res) => {
  const load = req.body;

  const newLoad = new LoadDetail(load);

  try {
    await newLoad.save();
    res.status(201).json(newLoad);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
