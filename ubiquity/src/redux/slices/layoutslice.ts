import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
import { Layout } from "../../ts-utils/interfaces";

const initialState = {list: true, grid: false, page: 0, filter: false } as Layout;

export const layout = createSlice( { 
      name:'questions', 
      initialState,
      reducers: {
          toggleLayout: (state: Layout) => {
              state.list = !state.list;
              state.grid = !state.grid;
          },
          nextPage: (state: Layout) => {
              state.page += 1;
          },
          prevPage: (state: Layout) => {
              state.page -= 1;
          },
          clearPage: (state: Layout) => {
              state.page = 0; 
          },
          toggleFilter: (state: Layout) => {
              state.filter = !state.filter;
          }
      }, 
  }); 
  
  export const { toggleLayout, nextPage, prevPage, clearPage, toggleFilter } = layout.actions;
  export default layout.reducer;