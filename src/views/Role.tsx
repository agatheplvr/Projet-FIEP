import React from 'react';
import { Link } from 'react-router-dom';
import "./role.css"

const Role = () => {
  return (
    <div>
      <button className="buttonStyleMentor" type="button">
        <Link to="/login-mentor">MENTOR</Link>
      </button>

      <button className="buttonStyleMentee" type="button">
        <Link to="/login-mentee">MENTEE</Link>
      </button>
    </div>
  );
};

export default Role;
