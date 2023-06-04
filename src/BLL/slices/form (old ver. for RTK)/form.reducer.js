import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../../DAL/Api/api';
import { LOADING_STATUS_ERROR, LOADING_STATUS_IDLE, LOADING_STATUS_LOADING } from '../../constants/constants';

const initialState = { loadingStatus: LOADING_STATUS_IDLE, error: null };

export const sendClient = createAsyncThunk(
  'formSlice/sendClient',
  async (data, { rejectWithValue }) => {
    try {
      const response = api.saveUser(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.message);
    }
  }
);

export const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendClient.pending, (state) => {
        state.loadingStatus = LOADING_STATUS_LOADING;
        state.error = null;
      })
      .addCase(sendClient.fulfilled, (state) => {
        state.loadingStatus = LOADING_STATUS_IDLE;
        state.error = null;
      })
      .addCase(sendClient.rejected, (state, action) => {
        state.loadingStatus = LOADING_STATUS_ERROR;
        state.error = action.payload;
      });
  }
});

export default formSlice.reducer;
