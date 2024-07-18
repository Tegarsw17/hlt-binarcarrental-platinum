import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// todo : Token akan dioper bersama dengan size
export const getList = createAsyncThunk(
  'getMenu',
  async ({ size, namecar }) => {
    const payload = {
      headers: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    };

    // console.log('get data : ', size, namecar);
    try {
      let response;
      if (
        size === 'all' &&
        (namecar === '' || namecar === undefined || namecar === 'all')
      ) {
        response = await axios.get(
          'https://api-car-rental.binaracademy.org/admin/v2/car?page=1&pageSize=10',
          payload
        );
      } else if (size === 'all' && namecar !== '') {
        response = await axios.get(
          `https://api-car-rental.binaracademy.org/admin/v2/car?name=${namecar}&page=1&pageSize=10`,
          payload
        );
      } else if (size !== 'all' && (namecar === '' || namecar === undefined)) {
        response = await axios.get(
          `https://api-car-rental.binaracademy.org/admin/v2/car?category=${size}&page=1&pageSize=10`,
          payload
        );
      } else {
        response = await axios.get(
          `https://api-car-rental.binaracademy.org/admin/v2/car?name=${namecar}?category=${size}&page=1&pageSize=10`,
          payload
        );
      }
      // console.log('success get size : ', size, namecar);
      // console.log('success get data : ', response.data);
      return response?.data;
    } catch (error) {
      // console.log('failed get data : ', error.response.data);
      return error.response.data;
    }
  }
);

const initialState = {
  listcar: [],
  loading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'listcar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getList.fulfilled, (state, action) => {
        state.loading = false;
        state.listcar = action.payload?.cars;
      })
      .addCase(getList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
