import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state
const initialState = {
  vehicles: [],
  status: 'idle',
  error: null,
};

// Async thunk for fetching vehicles
export const fetchVehicles = createAsyncThunk('vehicles/fetchVehicles', async () => {
  const response = await axios.get('https://vehicle-manaagement-system-fulllstack-1.onrender.com/api/vehicles');
  return response.data;
});

// Async thunk for adding a vehicle
export const addVehicle = createAsyncThunk('vehicles/addVehicle', async (vehicle) => {
  const response = await axios.post('https://vehicle-manaagement-system-fulllstack-1.onrender.com/api/vehicles', vehicle);
  return response.data;
});

// Async thunk for updating a vehicle
export const updateVehicle = createAsyncThunk('vehicles/updateVehicle', async ({ vehicleId, updatedVehicle }) => {
  const response = await axios.put(`https://vehicle-manaagement-system-fulllstack-1.onrender.com/api/vehicles/${vehicleId}`, updatedVehicle);
  return response.data;
});

// Create a slice of the state
const vehicleSlice = createSlice({
  name: 'vehicles',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVehicles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchVehicles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.vehicles = action.payload;
      })
      .addCase(fetchVehicles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addVehicle.fulfilled, (state, action) => {
        console.log(action.payload);
        
        state.vehicles.push(action.payload);
      })
      .addCase(updateVehicle.fulfilled, (state, action) => {
        const index = state.vehicles.findIndex(vehicle => vehicle._id === action.payload._id);
        if (index !== -1) {
          state.vehicles[index] = action.payload;
        }
      });
  },
});

export default vehicleSlice.reducer;
