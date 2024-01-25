import React from 'react';
import { Link } from 'react-router-dom';

const Role = () => {
  return (
    <div>
      <button type="button">
        <Link to="/login-mentor">MENTOR</Link>
      </button>

      <button type="button">
        <Link to="/login-mentee">MENTEE</Link>
      </button>
    </div>
  );
};

export default Role;
