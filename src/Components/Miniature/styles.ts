import styled from 'styled-components';

type ContainerProps ={
    palette: {
        backgroundColor: string,
        primaryTextColor: string,
        secondaryTextColor: string,
        accentColor: string
    }
}
export const Container = styled.div<ContainerProps>`
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border: 1px solid #000;
    gap: 10px;

    .top {
        display: flex;
        align-items: center;
        justify-content: center;

        background: ${(props) => props.palette.backgroundColor};
        height: 100px;
    }

    .content {
        span {
            display: flex;
            align-items: center;
            gap: 5px;
            padding: 10px;
        }
    }
    .theme-selected {
        text-align: center;
        color:#007FFF;
    }
    .footer {
        display: flex;
        gap: 20px;
        padding: 10px;
        justify-content: space-around;
        border-top: 1px solid #000;
        margin-top: auto;

        button {
            display: flex;
            padding: 8px;
            border-radius: 10px;
            border: none;
            cursor: pointer;

            &.select {
                color: #FFF;
                background: #007FFF;
            }
        }
        a {
            color: #007FFF;
        }
    }
`;
