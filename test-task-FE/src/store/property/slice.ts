import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllProperties } from "./extra";
import { PropertyInitState } from "../../interface/property.interface";

const initialState = {
  currentPage: 1,
  pageSize: 0,
  total: 0,
  totalPages: 0,
  properties: [],
  isFetchingProperties: false
} satisfies PropertyInitState as PropertyInitState;

const propertySlice = createSlice({
  name: "property",
  initialState,
  reducers: {
    updateIsFetchingProperties: (
      state,
      { payload }: PayloadAction<boolean>
    ) => {
      state.isFetchingProperties = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProperties.fulfilled, (state, { payload }) => {
        if (payload) {
          state.properties = payload.properties;
          state.currentPage = payload.currentPage;
          state.pageSize = payload.pageSize;
          state.total = payload.total;
          state.totalPages = payload.totalPages;
        }

        state.isFetchingProperties = false;
      })
      .addCase(getAllProperties.rejected, (state) => {
        state.isFetchingProperties = false;
      });
  }
});

export const { updateIsFetchingProperties } = propertySlice.actions;
export default propertySlice.reducer;
