import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../cssfiles/login.css';

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: '',
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle blur (when user leaves a field)
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  // Validate form
  useEffect(() => {
    const newErrors = {};

    if (form.fullName.trim().length < 6) {
      newErrors.fullName = 'Full name must be at least 6 characters';
    }

    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = 'Phone number must be exactly 10 digits';
    }

    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (form.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!form.agency) {
      newErrors.agency = 'Please select if you are an agency';
    }

    setErrors(newErrors);
    setIsFormValid(Object.keys(newErrors).length === 0);
  }, [form]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mark all fields as touched to show all validation messages
    setTouched({
      fullName: true,
      phone: true,
      email: true,
      password: true,
      agency: true
    });

    if (isFormValid) {
      console.log('Form submitted:', form);
      navigate('/login');
    }
  };

  return (
    <div className="form-container">
      <h2>Create your<br />PopX account</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name<span>*</span></label>
          <input
            type="text"
            name="fullName"
            placeholder="Marry Doe"
            value={form.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.fullName && errors.fullName && (
            <small className="error">{errors.fullName}</small>
          )}
        </div>

        <div className="form-group">
          <label>Phone number<span>*</span></label>
          <input
            type="text"
            name="phone"
            placeholder="1234567890"
            value={form.phone}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.phone && errors.phone && (
            <small className="error">{errors.phone}</small>
          )}
        </div>

        <div className="form-group">
          <label>Email address<span>*</span></label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.email && errors.email && (
            <small className="error">{errors.email}</small>
          )}
        </div>

        <div className="form-group">
          <label>Password<span>*</span></label>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={form.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {touched.password && errors.password && (
            <small className="error">{errors.password}</small>
          )}
        </div>

        <div className="form-group">
          <label>Company name</label>
          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
          />
        </div>

        <div className="radio-group">
          <p>Are you an Agency?<span>*</span></p>
          <div className="radio-options">
            <label>
              <input
                type="radio"
                name="agency"
                value="yes"
                checked={form.agency === 'yes'}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="agency"
                value="no"
                checked={form.agency === 'no'}
                onChange={handleChange}
              />
              No
            </label>
          </div>
          {touched.agency && errors.agency && (
            <small className="error">{errors.agency}</small>
          )}
        </div>

        <button type="submit" disabled={!isFormValid}>Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
