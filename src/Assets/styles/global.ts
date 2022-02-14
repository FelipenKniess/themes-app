import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media(max-width: 1080px){
        html {
            font-size: 93.75%;
        }
    }

    @media(max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }

    body{
        background: #FFF;
        color: #000;
    }

    body, input, textarea, select, button {
        font: 400 1rem "Roboto", sans-serif;
    }

    button {
        cursor: pointer;
    }

    a{
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
`;
