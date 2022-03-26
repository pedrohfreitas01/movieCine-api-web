import { Link } from "react-router-dom"
import { Container, Movie, MovieList } from "../Home/style"
import { useEffect, useState } from "react";

function PopTv(){
    
    const [popTv, setPoptv] = useState([])
    const image_popTop= `https://image.tmdb.org/t/p/w500/`
    
    useEffect(() =>{

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&&language=en-US&page=1`)
                                                                
            .then(response => response.json())
            .then(data => console.log(setPoptv(data.results)))

            
    },[])
    
    
    
    return(
        <Container>
            <h1>Populares na Tv</h1>
            <MovieList>
            {popTv.map(popTvs => {      // percorrendo o array e retornar algo , .map percorre algo 
                    return (
                        <Movie key={popTvs.id}>

                            <Link to={`/popDetails/${popTvs.id}`}><img src={`${image_popTop}${popTvs.poster_path}`} alt={popTvs.name}></img></Link>
                            
                            <span>{popTvs.name}</span>
                        </Movie>
                    )
                })}
            </MovieList>
        
            <Link to={'/start'}><button>Back to Home </button></Link>
    
        
        </Container>

        
        )




}


export default PopTv;