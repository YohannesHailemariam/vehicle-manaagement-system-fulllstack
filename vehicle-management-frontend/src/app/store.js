import { configureStore } from '@reduxjs/toolkit';
import vehicleReducer from '../features/vehicleSlice';

const store = configureStore({
  reducer: {
    vehicles: vehicleReducer,
  },
});

export default store;