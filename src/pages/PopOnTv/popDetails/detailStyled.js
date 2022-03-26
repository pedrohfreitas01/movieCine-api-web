import styled from "styled-components";



export const Caixa = styled.div`
  margin-top: 3rem;
    padding: 5rem 0 ;
    font-size: 2rem;
    display: flex;
    flex-wrap: wrap;
  

    h1{
        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .popTv{
        
        display: flex;
        align-items: center;
        justify-content: center;
    }

    img{
        width: 300px;
        border-radius: 1rem;
    }

    .details{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 3rem;
        max-width: 50%;
    }

    button{
        background: #6654da;
        border: none;
        cursor: pointer;
        border-radius: 1rem;
        color: white;
        padding: 0.8rem 2rem;
        margin-top: 1rem;
        font-size: 100%;
        transition: 1s all;
    }

    button:hover{
        background: #5848c2;
    }
`


