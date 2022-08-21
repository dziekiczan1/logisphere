import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api";

export const getLoads = () => async (dispatch) => {
  const { data } = await api.fetchLoads();
  dispatch(fetchAllLoads(data));
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

export const loadSlice = createSlice({
  name: "loads",
  initialState: {
    loads: [],
  },
  reducers: {
    fetchAllLoads: (state, action) => {
      return action.payload;
    },
    createNewLoad: (state, action) => {
      return [...state, action.payload];
    },
    update: (state, action) => {
      return state.loads?.map((load) =>
        load._id === action.payload._id ? action.payload : load
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const { fetchAllLoads, createNewLoad, update } = loadSlice.actions;
export default loadSlice.reducer;
