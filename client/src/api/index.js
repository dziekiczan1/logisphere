import axios from "axios";

const url = "http://localhost:5000/loads";

export const fetchLoads = () => axios.get(url);
