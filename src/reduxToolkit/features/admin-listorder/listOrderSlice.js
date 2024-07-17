import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// todo : Token akan dioper
export const getListOrder = createAsyncThunk(
  'getListOrder',
  async ({ sortBy, sortAsc }) => {
    const payload = {
      headers: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    };

    try {
      let response;
      let sort;
      if (sortAsc === true) {
        sort = 'asc';
      } else {
        sort = 'desc';
      }

      // console.log('get : ', sortBy, sort);
      if (sortBy === '') {
        // console.log('condition : 1');
        response = await axios.get(
          'https://api-car-rental.binaracademy.org/admin/v2/order?page=1&pageSize=10',
          payload
        );
      } else {
        console.log('condition : 2');
        response = await axios.get(
          `https://api-car-rental.binaracademy.org/admin/v2/order?sort=${sortBy}%3A${sort}&page=1&pageSize=10`,
          payload
        );
      }
      // console.log('success get data : ', response.data.orders);
      return response?.data;
    } catch (error) {
      // console.log('failed get data : ', error.response.data);
      return error.response.data;
    }
  }
);

export const getDetailCar = createAsyncThunk(
  'getDetailCar',
  async (_, { getState }) => {
    const orders = getState().orders;
    const payload = {
      headers: {
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
      },
    };

    try {
      const carPromises = orders.map((order) =>
        axios
          .get(
            `https://api-car-rental.binaracademy.org/admin/car/${order.CarId}`,
            payload
          )
          .then((response) => ({
            orderId: order.id,
            carName: response.data.name,
          }))
      );

      const carDetails = await Promise.all(carPromises);
      console.log('success get car detail : ', carDetails);
      return carDetails;
    } catch (error) {
      console.log('failed get car detail : ', error.response.data);
      return error.response.data;
    }
  }
);

const initialState = {
  // headers: [],
  nameCar: [],
  listorder: [],
  loading: false,
  error: null,
};

const listSlice = createSlice({
  name: 'getListOrder',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getListOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.listorder = action.payload?.orders;
        // state.headers = Object.keys(state.listorder[0]);
      })
      .addCase(getListOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getDetailCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(getDetailCar.fulfilled, (state, action) => {
        state.loading = false;
        state.nameCar = action.payload;
      })
      .addCase(getDetailCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
