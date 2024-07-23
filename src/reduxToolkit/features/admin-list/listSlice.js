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

    console.log('get data : ', paramsUrl.category);
    try {
      let response;
      response = await axios.get(
        'https://api-car-rental.binaracademy.org/admin/v2/car',
        config
      );
      console.log('response : ', response?.data);
      return response?.data;
    } catch (error) {
      // console.log('failed get data : ', error.response.data);
      return error.response.data;
    }
  }
);

const initialState = {
  listcar: [],
  pageCount: 0,
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
        state.pageCount = action.payload?.pageCount;
      })
      .addCase(getList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default listSlice.reducer;
