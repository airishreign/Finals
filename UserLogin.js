import React, { useState } from "react";

const UserLogin = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = () => {
    // Simulating login check
    if (email === "user@example.com" && password === "password") {
      onLogin({ email, role: "user" });
      alert("Login successful!");
    } else {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <h2>User Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <button onClick={handleLogin}>Login</button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default UserLogin;
