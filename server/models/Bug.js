// server/models/Bug.js
import mongoose from 'mongoose';

const BugSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved'],
    default: 'open'
  }
}, { timestamps: true });

const Bug = mongoose.model('Bug', BugSchema);
export default Bug;
