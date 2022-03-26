import styled from "styled-components";


export const BoxIntro = styled.div `

    h1{
        text-align: center;
        justify-content: center;
        margin-top: 4rem;
        font-size: 12rem;
    }
    
    p{
        text-align: center;
        justify-content: center;
        padding: 2rem;
        font-size: 4rem;
        
    }


    span{
        color: red;
    }

   
`

export const MenuIntro = styled.div `
    align-items: center;
    justify-content: space-around;
    display: flex;
    margin: 5rem auto;
    

    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 1.6rem 4rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: 1s all;
    }

    button:hover{
        background: #5848c2;
    }

`

