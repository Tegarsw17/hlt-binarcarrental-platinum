import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// todo : Token akan dioper bersama dengan size
export const getList = createAsyncThunk(
  'getMenu',
  async ({ paramsUrl, access_token_admin }) => {
    const config = {
      headers: {
        access_token: access_token_admin,
      },
      params: {
        page: paramsUrl.page,
        pageSize: paramsUrl.pageSize,
        name: paramsUrl.name,
        category: paramsUrl.category,
      },
    };

    try {
      let response;
      response = await axios.get(
        // 'http://localhost:3100/car',
        'https://nest-car-rent.onrender.com/car',
        // 'https://api-car-rental.binaracademy.org/admin/v2/car',
        config
      );
      return response?.data;
    } catch (error) {
      return error.response.data;
    }
  }
);

const initialState = {
  listcar: [],
  pageCount: 1,
  currentPage: 0,
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
        const arrayCars = action.payload?.cars || [];
        state.loading = false;
        state.listcar = arrayCars;
        state.currentPage = action.payload?.page;
        state.pageCount = action.payload?.pageCount;
      })
      .addCase(getList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
