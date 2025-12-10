import styled from "styled-components";

export const ApiContainer = styled.div`
  background: white;
  color: black;
  min-height: 100vh;
  padding: 20px;

  h1, h2, h3, p {
    color: black;
  }

  button {
    background: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 20px;

    &:hover {
      background: #0056b3;
    }
  }

  div {
    margin-bottom: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;