// client/src/components/BugForm.js
import React, { useState } from 'react';
import axios from 'axios';

function BugForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/bugs', { title, description });
      onAdd(res.data);
      setTitle('');
      setDescription('');
      setError(null);
    } catch (err) {
      setError('Failed to report bug.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Bug Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <button type="submit">Report Bug</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default BugForm;
