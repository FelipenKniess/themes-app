import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 500px;
  height: 100vh;

  svg {
    cursor: pointer;
    margin-bottom: 15px;
  }

  form {
      background-color: #d3d3d3;
      padding: 50px;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      gap: 20px;
  }
`;
