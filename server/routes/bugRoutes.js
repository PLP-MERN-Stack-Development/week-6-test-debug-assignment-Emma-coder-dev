// server/routes/bugRoutes.js
import express from 'express';
import Bug from '../models/Bug.js';

const router = express.Router();

// Create Bug
router.post('/', async (req, res, next) => {
  try {
    const bug = await Bug.create(req.body);
    res.status(201).json(bug);
  } catch (err) {
    next(err);
  }
});

// Get All Bugs
router.get('/', async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.status(200).json(bugs);
  } catch (err) {
    next(err);
  }
});

// Update Bug
router.put('/:id', async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!bug) return res.status(404).json({ error: 'Bug not found' });
    res.status(200).json(bug);
  } catch (err) {
    next(err);
  }
});

// Delete Bug
router.delete('/:id', async (req, res, next) => {
  try {
    const bug = await Bug.findByIdAndDelete(req.params.id);
    if (!bug) return res.status(404).json({ error: 'Bug not found' });
    res.status(200).json({ message: 'Bug deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
