import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {api} from '../../../DAL/Api/api';

const initialState = {loadingStatus: 'idle', error: null};

export const sendClient = createAsyncThunk(
    'formSlice/sendClient',
    async (data, {rejectWithValue}) => {
        try {
            const response = api.saveUser(data);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)

export const formSlice = createSlice({
    name: 'formSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendClient.pending, state => {
                state.loadingStatus = 'loading';
                state.error = null;
            })
            .addCase(sendClient.fulfilled, state => {
                state.loadingStatus = 'idle';
                state.error = null;
            })
            .addCase(sendClient.rejected, (state, action) => {
                state.loadingStatus = 'error';
                state.error = action.payload;
            })
    }
});

export default formSlice.reducer;