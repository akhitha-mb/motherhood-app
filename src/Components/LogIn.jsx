import React, { useState } from 'react';
import axios from 'axios';


const LogIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const { username, password } = formData;

  // Handle input change
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
        const res = await axios.post('http://localhost:5001/api/auth/login', formData);
        console.log('Login successful:', res.data);
        // Store the token in localStorage
        localStorage.setItem('token', res.data.token);
    } catch (error) {
        console.error('Error during login:', error.response.data);
    }
};


  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="container">
        <div className="row g-3">
          <form onSubmit={onSubmit} className="col-12 col-sm-8 col-md-6 col-lg-5 mx-auto">
            <div className="mb-3">
              <label htmlFor="username" className="form-label">USERNAME</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={onChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">PASSWORD</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <div className="d-flex justify-content-center"> {/* Use Flexbox for centering */}
            <button type="submit" className="btn btn-success">Log In</button>
            </div>
          </form>

          <div className="col-12 text-center mt-4">
            <h6>ALREADY HAVE AN ACCOUNT?</h6>
            <a href="/signup" className="btn btn-primary">Create an Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
