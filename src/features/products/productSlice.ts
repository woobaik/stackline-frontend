import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { IProduct } from '../../interfaces/Product';

interface ProductState {
  loading: boolean;
  product: IProduct | null;
}

const initialState: ProductState = {
  loading: true,
  product: null,
};

export const getProduct = createAsyncThunk<IProduct>(
  '/',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        '/stackline_frontend_assessment_data_2021.json'
      );

      return response.data[0];
    } catch (error) {
      console.error(`ERR:: ${error}`);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(getProduct.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default productSlice.reducer;
export const { setProduct } = productSlice.actions;
