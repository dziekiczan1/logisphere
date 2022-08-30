import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const getLoadsBySearch = (searchQuery) => async (dispatch) => {
  try {
    const {
      data: { data },
    } = await api.fetchLoadsBySearch(searchQuery);
    console.log(data);
    dispatch(fetchAllLoadsBySearch(data));
  } catch (error) {
    console.log(error);
  }
};

export const getLoads = () => async (dispatch) => {
  try {
    const { data } = await api.fetchLoads();
    dispatch(fetchAllLoads(data));
  } catch (error) {
    console.log(error);
  }
};

export const createLoad = (load) => async (dispatch) => {
  try {
    const { data } = await api.createLoad(load);
    dispatch(createNewLoad(data));
  } catch (error) {
    console.log(error);
  }
};

export const updateLoad = (id, load) => async (dispatch) => {
  try {
    const { data } = await api.updateLoad(id, load);
    dispatch(update(data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteLoad = (id) => async (dispatch) => {
  try {
    await api.deleteLoad(id);
    dispatch(remove(id));
  } catch (error) {
    console.log(error);
  }
};

export const loadSlice = createSlice({
  name: "loads",
  initialState: {
    loads: [],
  },
  reducers: {
    fetchAllLoads: (state, action) => {
      return action.payload;
    },
    fetchAllLoadsBySearch: (state, action) => {
      return action.payload;
    },
    createNewLoad: (state, action) => {
      return [...state, action.payload];
    },
    update: (loads, action) => {
      return loads?.map((load) =>
        load._id === action.payload._id ? action.payload : load
      );
    },
    remove: (loads, action) => {
      return loads?.filter((load) => load._id !== action.payload);
    },
  },
});

export const {
  fetchAllLoads,
  fetchAllLoadsBySearch,
  createNewLoad,
  update,
  remove,
} = loadSlice.actions;
export default loadSlice.reducer;
