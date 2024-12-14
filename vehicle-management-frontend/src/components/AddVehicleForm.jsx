import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addVehicle } from '../features/vehicleSlice';

const AddVehicleForm = () => {
  const [name, setName] = useState('');
  const [status, setStatus] = useState('available');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVehicle({ name, status }));
    setName('');
    setStatus('available');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6">
      <div>
        <label className="block text-gray-700">Vehicle Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Status</label>
        <select
  value={status}
  onChange={(e) => setStatus(e.target.value)}
  className="w-full p-2 border rounded"
>
  <option value="available">Available</option>
  <option value="unavailable">Unavailable</option>
  <option value="maintainance">Maintenance</option>
</select>

      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Add Vehicle
      </button>
    </form>
  );
};

export default AddVehicleForm;
