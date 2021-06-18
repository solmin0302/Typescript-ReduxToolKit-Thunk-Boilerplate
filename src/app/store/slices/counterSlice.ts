import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount, fetchCountError } from '../../api/CounterAPI';
import { AppDispatch, RootState } from '../configStore';

import { showToast, hideToast } from './toastSlice';

type CounterState = {
  value: number;
  status: string;
};

const initialState: CounterState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number, { dispatch, rejectWithValue }) => {
    try {
      const response: any = await fetchCountError(amount);
      return response.data;
    } catch (error) {
      dispatch(showToast());
      return rejectWithValue(error.response.data);
    }
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },

    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state, action) => {});
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const incrementIfOdd =
  (amount: number) => (dispatch: AppDispatch, getState: () => RootState) => {
    const currentValue = selectCount(getState());

    if (currentValue % 2 === 1) {
      dispatch(incrementByAmount(amount));
    }
  };

export default counterSlice.reducer;
