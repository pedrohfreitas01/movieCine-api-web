import styled from "styled-components";


export const Container = styled.div`

    h1{
        text-align: center;
        margin: 4rem auto;
    }

    button{
        padding: 0.8rem 2rem;
        align-items: center;
        margin-top: 4rem;
        color: white;
        background: #6654da;
        border-radius: 0.5rem;
    }

`

export const MovieList = styled.ul`
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 4rem 3rem  

    


`

export const Movie = styled.li`


display: flex;
flex-direction: column;
align-items: center;
    

    img{
        width: 180px;
        height: 270px;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    
    span{
        font-weight: bold;
        font-size: 120%;
        text-align: center;
    }

    a{
        transition: all 0.5s;
    }

    a:hover{
        transform: scale(1.1);

    }

`