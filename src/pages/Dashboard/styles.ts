import styled, {css} from 'styled-components'

export const Title = styled.h1`
    font-size: 47px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

interface FormProps {
    hasError:boolean;
}

export const Form = styled.form<FormProps>`
    margin-top: 40px;
    max-width: 700px;

    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 2px solid #fff;
        color: #3a3a3a;
        border-radius: 5px 0 0 5px;

        ${(props) => props.hasError && css`
            border-color: #c53030;
        ` }

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        width: 210px;
        height: 70px;
        background-color: green;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover {
            background: darkgreen;
        }
    }
`;

export const Error = styled.span`
    display: block;
    color: #c53030;
    margin-top: 8px;
`;

export const Repositorie = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #fff;
        color: #000;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: block;
        text-decoration: none;
        margin-bottom: 15px;

        display:flex;
        align-items: center;

        transition: transform 0.2s;

        &:hover {
            background: lightgray;
            transform: translateX(10px);
        }

        img {
            width: 74px;
            height: 74px;
            border-radius: 50%
            
        }
        div {
            margin-left: 30px;
            strong {
                font-size:18px;
            }
            
            p{
                margin-top: 10px;
                color: gray;
            }
        }
    }
`;