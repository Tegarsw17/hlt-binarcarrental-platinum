import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// todo : Token akan dioper bersama dengan id
export const deleteCar = createAsyncThunk(
  'deleteCar',
  async ({ idCar, access_token_admin }) => {
    const navigate = useNavigate();
    const payload = {
      headers: {
        access_token: access_token_admin,
      },
    };
    try {
      // let iddummy = 0;
      let response;
      response = await axios.delete(
        `https://api-car-rental.binaracademy.org/admin/car/${idCar}`,
        payload
      );
      setTimeout(() => {
        sessionStorage.setItem('successMessage', 'Data Berhasil Dihapus');
        sessionStorage.setItem('color', '#000000');
        navigate('/admin/listcar');
      }, 0);
      return response?.data.message;
    } catch (error) {
      console.log('failed delete data : ', error.response.data);
      return error.response.data;
    }
  }
);

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
