import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// todo : Token akan dioper
export const getOrderReport = createAsyncThunk(
  'getOrderReport',
  async ({ startDate, endDate }) => {
    const payload = {
      headers: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    };

    try {
      let response;
      response = await axios.get(
        `https://api-car-rental.binaracademy.org/admin/order/reports?from=${startDate}&until=${endDate}`,
        payload
      );
      console.log('success get data : ', response.data);
      return response?.data;
    } catch (error) {
      console.log('failed get data : ', error.response.data);
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
