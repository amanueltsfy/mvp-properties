import { createAsyncThunk } from "@reduxjs/toolkit";
import API from "services/axios-config";
import ENDPOINTS from "constants/endpoints";
import { updateIsFetchingProperties } from "./slice";
import { SearchPropertyPayload } from "interface/property.interface";

export const getAllProperties = createAsyncThunk(
  "property/get-all-properties",
  async (payload: SearchPropertyPayload, { dispatch }) => {
    try {
      dispatch(updateIsFetchingProperties(true));
      const { data } = await API.get(ENDPOINTS.PROPERTIES, {
        params: { ...payload }
      });
      return data ?? [];
    } catch (error) {
      console.log(error);
    }
  }
);
