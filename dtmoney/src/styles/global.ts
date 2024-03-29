import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f0f2f5;
        --red: #E52E4D;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;

        --text-title: #363f5f;
        --text-body: #969cb3;

        --background: #f0f2f5;
        --shape: #ffffff;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{ 
        @media (max-width: 1080px) {
            font-size: 93.75%;  //usamos % pois se o usuario altera o tamanho da pagina, o tamanho da letra tbm se ajusta. Se definir como pixel fica fixo
        }
        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, textarea, input{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{ 
        cursor: pointer;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
`;
