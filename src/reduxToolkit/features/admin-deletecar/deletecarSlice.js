import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// todo : Token akan dioper bersama dengan id
export const deleteCar = createAsyncThunk('deleteCar', async ({ idCar }) => {
  console.log('id : ', idCar);
  const payload = {
    headers: {
      access_token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc',
    },
  };

  try {
    // let iddummy = 0;
    response = await axios.delete(
      `https://api-car-rental.binaracademy.org/admin/car/${idCar}`,
      payload
    );
    console.log('Success delete data : ', response);
    return response?.message;
  } catch (error) {
    console.log('failed delete data : ', error.response.data);
    return error.response.data;
  }
});

const initialState = {
  message: null,
  loading: false,
  error: null,
};

const deletecarSlice = createSlice({
  name: 'deletecarSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(deleteCar.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.loading = false;
        state.message = action.payload;
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default deletecarSlice.reducer;
