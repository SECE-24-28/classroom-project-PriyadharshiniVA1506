import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    margin: 0;
    padding: 0;
  }
`;

export const FormContainer = styled.div`
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  min-height: 100vh;
  
  body {
    background: white;
  }

  h1 {
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 40px;
    color: #333;
    line-height: 1.3;
    font-weight: 500;

    .welcome-text {
      color: #1e3a8a;
      font-size: 2rem;
    }

    span {
      color: #ef4444;
    }
  }

  form {
    background: #f5f5f5;
    padding: 40px;
    border-radius: 8px;
    border: 1px solid #ddd;
  }

  .form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    margin-bottom: 25px;
  }

  .form-group {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 1rem;
    color: #666;
    margin-bottom: 8px;
    font-weight: 500;
  }

  input,
  select {
    padding: 12px 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.95rem;
    background: white;
    color: #333;

    &::placeholder {
      color: #aaa;
    }

    &:focus {
      outline: none;
      border-color: #007bff;
    }
  }

  .mobile-group {
    display: flex;
    gap: 10px;

    select {
      width: 80px;
      flex-shrink: 0;
    }

    input {
      flex: 1;
    }
  }

  .password-group {
    position: relative;

    .toggle-password {
      position: absolute;
      right: 15px;
      top: 42px;
      background: none;
      border: none;
      color: #666;
      cursor: pointer;
      font-size: 0.85rem;
      text-decoration: underline;
    }
  }

  .password-requirements {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin-top: 15px;
    font-size: 0.85rem;
    color: #888;

    div {
      ul {
        margin: 0;
        padding-left: 0;
      }

      li {
        list-style: disc;
        margin-left: 20px;
        margin-bottom: 5px;
      }
    }
  }

  .submit-btn {
    background: #ef4444;
    color: white;
    padding: 12px 30px;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 15px;

    &:hover {
      background: #dc2626;
    }
  }

  .login-link {
    font-size: 0.9rem;
    color: #666;
    margin-top: 15px;

    a {
      color: #007bff;
      text-decoration: underline;
    }
  }
`;