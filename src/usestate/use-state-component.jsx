import React, { useState } from "react";
import { FormContainer, GlobalStyle } from "./use-state-style";

const UsestateformComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <GlobalStyle />
      <FormContainer>
      <h1>
        <span className="welcome-text">Welcome to</span><br />
        Aptitude Guru Hem <span>LMS</span>
      </h1>
      
      <form>
        <div className="form-row">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" placeholder="Enter last name" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Select College</label>
            <select>
              <option>AGH B2C</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Passout Year</label>
            <select>
              <option>2024</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Department</label>
            <select>
              <option>CSE</option>
            </select>
          </div>
          <div className="form-group">
            <label>Ug or Pg</label>
            <select>
              <option>UG</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <label>Mobile</label>
            <div className="mobile-group">
              <select>
                <option>IND</option>
              </select>
              <input type="tel" placeholder="Enter Mobile number" />
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group password-group">
            <label>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter the password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁 Show
            </button>
          </div>
          <div className="form-group password-group">
            <label>Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Enter the confirm password"
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              👁 Show
            </button>
          </div>
        </div>

        <div className="password-requirements">
          <div>
            <li>minimum 8 character</li>
            <li>one special character</li>
            <li>one number</li>
          </div>
          <div>
            <li>one lowercase character</li>
            <li>one uppercase character</li>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
        
        <p className="login-link">
          Already have an Account Go to <a href="#">Log In</a>
        </p>
      </form>
      </FormContainer>
    </>
  );
};

export default UsestateformComponent;