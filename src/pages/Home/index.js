import { useEffect, useState } from "react";
import { Container, MovieList, Movie } from "./style";


function Home() {

    const [movies, setMovieis] = useState([])
    const image_url = `https://image.tmdb.org/t/p/w500/`

    //toda vez q pagina atualizar consumir a api 
    useEffect(() => {
        // parametro 1 = consumir a API


        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => console.log(setMovieis(data.results)))
    }, [])


    return (
        
        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {      // percorrendo o array e retornar algo , .map percorre algo 
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={`${image_url}${movie.poster_path}`} alt={movie.title}></img>
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}



            </MovieList>
        </Container>
    )
}


export default Home;