import { configureStore } from '@reduxjs/toolkit';
import layoutslice from './slices/layoutslice';
import productslice from './slices/productslice';

export const store = configureStore({
  reducer: {
    layout: layoutslice,
    products: productslice
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;