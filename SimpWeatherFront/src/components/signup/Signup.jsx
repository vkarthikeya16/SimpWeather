import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Auth.css'; // Common styling for Login and Signup

const Signup = () => {
  const [username, setUsername] = useState(''); // Separate username field
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // To navigate to other pages

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,  // Send the correct username
          email: email,        // Send the email separately
          password: password,
        }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log('Signup successful:', user);
        // Redirect to the login page after successful signup
        navigate('/login');
      } else {
        const errorText = await response.text();
        console.error('Signup failed:', errorText);
        alert('Signup failed: ' + errorText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      alert('Error during signup');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <div className="input-group">
          <label>Username</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="auth-button">Sign Up</button>
      </form>
      <p className="redirect-text">
        Already have an account? <a href="/login">Login here</a>.
      </p>
    </div>
  );
};

export default Signup;
