const express = require('express');
const Vehicle = require('../models/Vehicle');
const router = express.Router();

// Add a new vehicle
router.post('/', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Update vehicle status
router.put('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(
      req.params.id,
      { status: req.body.status, lastUpdated: Date.now() },
      { new: true }
    );
    if (!vehicle) return res.status(404).json({ error: 'Vehicle not found' });
    res.status(200).json(vehicle);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Fetch all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
