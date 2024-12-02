import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RoleSelection() {
  const [role, setRole] = useState('');

  return (
    <div className="role-selection-container">
      <h1>Role Selection</h1>
      <div className="role-buttons">
        <button onClick={() => setRole('user')}>User</button>
        <button onClick={() => setRole('admin')}>Admin</button>
      </div>
      
      {role && (
        <div className="role-selected">
          <p>{role.charAt(0).toUpperCase() + role.slice(1)} selected</p>
          {role === 'user' ? (
            <Link to="/user-login">Go to User Login</Link>
          ) : (
            <Link to="/admin-login">Go to Admin Login</Link>
          )}
        </div>
      )}

      <div className="switch-container">
        <Link to="/register">Switch to Register</Link>
      </div>
    </div>
  );
}

export default RoleSelection;
