import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';

import axios from 'axios';

// todo : Token akan dioper
export const getListOrder = createAsyncThunk(
  'getListOrder',
  async ({ paramsUrl, access_token_admin }) => {
    const config = {
      headers: {
        access_token: access_token_admin,
        Authorization: `Bearer ${access_token_admin}`,
      },
      params: {
        page: paramsUrl.page,
        pageSize: paramsUrl.pageSize,
        sort: `${paramsUrl.sortBy}:${paramsUrl.sortAsc}`,
      },
    };
    try {
      let response;
      response = await axios.get(
        // 'http://localhost:3100/admin/order',
        'https://nest-car-rent.onrender.com/admin/order',
        // 'https://api-car-rental.binaracademy.org/admin/v2/order',
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
    const config = {
      headers: {
        access_token: access_token_admin,
        Authorization: `Bearer ${access_token_admin}`,
      },
    };
    const data = {
      status: { status },
    };

    try {
      let response;
      response = await axios.patch(
        // `https://api-car-rental.binaracademy.org/admin/order/${id}`,
        `https://nest-car-rent.onrender.com/admin/order/${id}`,
        // `http://localhost:3100/admin/order/${id}`,
        data,
        config
      );
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  listorder: [],
  statusorder: [],
  pageCount: 0,
  currentPages: 0,
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
        // state.listorder = action.payload?.orders;
        state.listorder = Array.isArray(action.payload?.orders)
          ? action.payload.orders
          : [];
        state.pageCount = action.payload?.pageCount;
        state.currentPages = action.payload?.currentPage;
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
