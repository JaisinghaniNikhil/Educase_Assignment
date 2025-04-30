import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/login.css';

function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle blur to mark touched
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Validate form fields
  useEffect(() => {
    const newErrors = {};

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({ email: true, password: true });

    if (isFormValid) {
      console.log('Login successful:', form);
      navigate('/home'); // navigate to Home page
    }
  };

  return (
    <div className="form-container">
      <h2>Signin to your<br />PopX account</h2>
      <p className="subtitle">
        Lorem ipsum dolor sit amet,<br />
        consectetur adipiscing elit.
      </p>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <small className="error">{errors.email}</small>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>Login</button>
      </form>
    </div>
  );
}

export default Login;
