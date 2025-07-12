// client/src/components/BugList.js
import React from 'react';

function BugList({ bugs, onUpdate, onDelete }) {
  if (bugs.length === 0) return <p>No bugs reported.</p>;

  return (
    <ul>
      {bugs.map(bug => (
        <li key={bug._id}>
          <strong>{bug.title}</strong> - {bug.status}
          <br />
          <small>{bug.description}</small>
          <br />
          <button onClick={() => onUpdate(bug._id, 'in-progress')}>In Progress</button>
          <button onClick={() => onUpdate(bug._id, 'resolved')}>Resolve</button>
          <button onClick={() => onDelete(bug._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default BugList;
