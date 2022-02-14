import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 100px auto;
  max-width: 1000px;

  @media(max-width: 1000px){
    margin: 100px 30px;
  }
  .actions {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    gap: 50px;

    @media(max-width: 1000px){
      flex-direction: column;
      gap: 0px;
      align-items: center;
    }
    a {
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #007FFF;
      text-align: center;
      padding: 10px;
      border-radius: 10px;
    }

    > div {
      display: flex;
      align-items: center;
      gap: 10px;

      input{
        margin-left: 10px;
      }

      button {
        display: flex;
        padding: 8px;
        background: #007FFF;
        border-radius: 50%;
        border: none;
        cursor: pointer;

        svg {
          color: #FFF;
        }
      }
    }
  }
  .themes {
    display: flex;
    flex-wrap: wrap;
    gap: 13px;
    justify-content: center;
  }

  .demonstration{
    background-color: ${(props) => props.theme.backgroundColor};
    border: 1px solid black;
    border-radius: 20px;
    padding: 10px;
    margin: 20px auto ;
    max-width: 500px;

    a {
      background: ${(props) => props.theme.accentColor};
      margin-top: 10px;
      pad: 10px;
      color: #FFF;
      border-radius: 20px;
      text-align: center;
      display: block;
      width: 100px;
    }

    h1 {
      color: ${(props) => props.theme.primaryColor};
    }

    p {
      color: ${(props) => props.theme.secondaryColor};
    }
  }
`;
