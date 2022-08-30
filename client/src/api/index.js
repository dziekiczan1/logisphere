import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem(`profile`)).token
    }`;
  }

  return req;
});

export const fetchLoads = () => API.get(`/loads`);
export const fetchLoadsBySearch = (searchQuery) =>
  API.get(`/loads/search?searchQuery=${searchQuery.search || "none"}`);
export const createLoad = (newLoad) => API.post(`/loads`, newLoad);
export const updateLoad = (id, updatedLoad) =>
  API.patch(`/loads/${id}`, updatedLoad);
export const deleteLoad = (id) => API.delete(`/loads/${id}`);

export const signIn = (formData) => API.post(`user/signin`, formData);
export const signUp = (formData) => API.post(`user/signup`, formData);
