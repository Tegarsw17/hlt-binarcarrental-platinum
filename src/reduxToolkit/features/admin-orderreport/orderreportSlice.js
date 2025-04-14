import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// todo : Token akan dioper
export const getOrderReport = createAsyncThunk(
  'getOrderReport',
  async ({ startDate, endDate, access_token_admin }) => {
    const payload = {
      headers: {
        Authorization: `Bearer ${access_token_admin}`,
      },
    };

    try {
      let response;
      response = await axios.get(
        // `https://api-car-rental.binaracademy.org/admin/order/reports?from=${startDate}&until=${endDate}`,
        // `http://localhost:3100/admin/order/reports?from=${startDate}&until=${endDate}`,
        `https://nest-car-rent.onrender.com/admin/order/reports?from=${startDate}&until=${endDate}`,
        payload
      );
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  orderreport: [],
  days: [],
  ordercount: [],
  loading: false,
  error: null,
};

const orderreportSlice = createSlice({
  name: 'getOrderReport',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrderReport.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOrderReport.fulfilled, (state, action) => {
        state.loading = false;
        state.orderreport = action.payload;
        state.days = state.orderreport?.map((report) => report.day);
        state.ordercount = state.orderreport?.map(
          (report) => report.orderCount
        );
        // state.headers = Object.keys(state.listorder[0]);
      })
      .addCase(getOrderReport.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default orderreportSlice.reducer;
