import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { data } from 'autoprefixer';
import axios from 'axios';

// todo : Token akan dioper
export const getListOrder = createAsyncThunk(
  'getListOrder',
  async (searchParams) => {
    const { page, pageSize, sortBy, sortAsc } = searchParams;
    const access_token_admin =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc';

    const config = {
      headers: {
        access_token: access_token_admin,
      },
      params: {
        page: page,
        pageSize: pageSize,
        sort: `${sortBy}:${sortAsc}`,
      },
    };

    console.log(config.params);
    try {
      let response;
      response = await axios.get(
        'https://api-car-rental.binaracademy.org/admin/v2/order',
        config
      );

      console.log(response.data);
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

// export const patchStatusOrder = createAsyncThunk(
//   'patchStatusOrder',
//   async (params) => {
//     const { orderId, statusOrder } = params;
//     const token =
//       'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc';
//     const payload = {
//       headers: {
//         access_token: token,
//       },
//       params: {
//         orderId: orderId,
//       },
//       data: {
//         status: statusOrder,
//       },
//     };
//     try {
//       let response;
//       response = await axios.patch(
//         'https://api-car-rental.binaracademy.org/admin/order',
//         payload
//       );
//       return response?.data;
//     } catch (error) {
//       return error.response.data;
//     }
//   }
// );

const initialState = {
  // headers: [],
  // nameCar: [],
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
      });
    // .addCase(getDetailCar.pending, (state) => {
    //   state.loading = true;
    // })
    // .addCase(getDetailCar.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.nameCar = action.payload;
    // })
    // .addCase(getDetailCar.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
});

export default listSlice.reducer;
