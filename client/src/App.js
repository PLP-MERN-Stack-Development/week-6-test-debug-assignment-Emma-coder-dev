// client/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

function App() {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchBugs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/bugs');
      setBugs(res.data);
    } catch (err) {
      console.error('Error fetching bugs:', err);
    } finally {
      setLoading(false);
    }
  };

  const addBug = (bug) => setBugs(prev => [...prev, bug]);

  const updateBug = async (id, status) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/bugs/${id}`, { status });
      setBugs(prev => prev.map(bug => bug._id === id ? res.data : bug));
    } catch (err) {
      console.error('Update failed:', err);
    }
  };

  const deleteBug = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/bugs/${id}`);
      setBugs(prev => prev.filter(bug => bug._id !== id));
    } catch (err) {
      console.error('Delete failed:', err);
    }
  };

  useEffect(() => { fetchBugs(); }, []);

  return (
    <ErrorBoundary>
      <div className="App">
        <h1>🐞 Bug Tracker</h1>
        <BugForm onAdd={addBug} />
        {loading ? <p>Loading bugs...</p> : <BugList bugs={bugs} onUpdate={updateBug} onDelete={deleteBug} />}
      </div>
    </ErrorBoundary>
  );
}

export default App;
