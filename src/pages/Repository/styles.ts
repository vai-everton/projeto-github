import styled from 'styled-components'

export const Header = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
    img {

    }

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #a8a8b3;
    }
`;

export const RepositoryInfo = styled.section`
    
    margin-top: 80px;

    header {
        display: flex;
        align-items: center;

        img{
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
    }
    
    div {
        margin-left: 24px;

        strong {
            font-size: 36px;
            color: #3d3d4d;
        }

        p {
            font-size: 18px;
            color: #737380;
            margin-top: 4px;
        }
    }

    ul {
        display: flex;
        list-style: none;   
        margin-top: 40px;

        li {
            & + li {
                margin-left: 80px;
            }
            font-size: 36px;
            strong{
                display: block;
                list-style: none;   
                color: #3d3d4d;
            }
            
            span {
                display: block;
                margin-top: 4px;
                color: #3d3d4d;
                font-size: 20px;
            }
        }
    }
    
`;

export const Issues = styled.div`
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