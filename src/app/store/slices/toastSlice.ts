import { createSlice } from '@reduxjs/toolkit';

type ToastState = {
  show: boolean;
};
const initialState: ToastState = {
  show: false,
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    showToast: (state) => {
      state.show = true;
    },
    hideToast: (state) => {
      state.show = false;
    },
  },
});

export const { showToast, hideToast } = toastSlice.actions;

export default toastSlice.reducer;
