import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

// todo : Token akan dioper
export const getListOrder = createAsyncThunk(
  'getListOrder',
  async ({ paramsUrl, access_token_admin }) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc';

    // console.log(param);
    const config = {
      headers: {
        access_token: access_token_admin,
      },
      params: {
        page: paramsUrl.page,
        pageSize: paramsUrl.pageSize,
        sort: `${paramsUrl.sortBy}:${paramsUrl.sortAsc}`,
      },
    };

    // console.log(config.params);
    try {
      let response;
      response = await axios.get(
        'https://api-car-rental.binaracademy.org/admin/v2/order',
        config
      );

      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

export const patchStatusOrder = createAsyncThunk(
  'patchStatusOrder',
  async ({ id, status, access_token_admin }) => {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc';

    const config = {
      headers: {
        access_token: access_token_admin,
      },
    };

    const data = {
      status: { status },
    };

    // console.log(token);
    try {
      let response;
      response = await axios.patch(
        `https://api-car-rental.binaracademy.org/admin/order/${id}`,
        data,
        config
      );
      // console.log('success patch status', response.data);
      return response?.data;
    } catch (error) {
      // console.log('failed patch status', response.data);
      return error.response.data;
    }
  }
);

const initialState = {
  listorder: [],
  statusorder: [],
  countPage: 0,
  pageSize: 0,
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
        state.countPage = action.payload?.countPage;
        state.pageSize = action.payload?.countSize;
      })
      .addCase(getListOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(patchStatusOrder.pending, (state) => {
        state.loading = true;
      })
      .addCase(patchStatusOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.statusorder = action.payload;
      })
      .addCase(patchStatusOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
