import axios from "axios";

const url = "http://localhost:5000/loads";

export const fetchLoads = () => axios.get(url);
export const createLoad = (newLoad) => axios.post(url, newLoad);
export const updateLoad = (id, updatedLoad) =>
  axios.patch(`${url}/${id}`, updatedLoad);
export const deleteLoad = (id) => axios.delete(`${url}/${id}`);
