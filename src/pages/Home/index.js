import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, MovieList, Movie } from "./style";

function Home() {

    const [movies, setMovieis] = useState([])
    const image_url_movies = `https://image.tmdb.org/t/p/w500/`

    //toda vez q pagina atualizar consumir a api 
    useEffect(() => {
        // parametro 1 = consumir a API

        
        //fetch é uma api navita do browser que voce sempre passa uma url pra ele sendo a api no  caso
        // ira retornar uma promise ; usando asssim .then  
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&language=en-US`)
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

                            <Link to={`/details/${movie.id}`}><img src={`${image_url_movies}${movie.poster_path}`} alt={movie.title}></img></Link>

                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}


            </MovieList>
            <Link to={'/start'}><button>Back to Home </button></Link>

        </Container>


    )
}


export default Home;