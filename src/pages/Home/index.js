import { useEffect, useState } from "react";
import { Container, MovieList, Movie } from "./style";


function Home() {

    const [movies, setMovieis] = useState([])
    const image_url_movies = `https://image.tmdb.org/t/p/w500/`

    const [popTv, setPoptv] = useState([])
    const image_popTop= `https://image.tmdb.org/t/p/w500/`


    //toda vez q pagina atualizar consumir a api 
    useEffect(() => {
        // parametro 1 = consumir a API

        //fetch é uma api navita do browser que voce sempre passa uma url pra ele sendo a api no  caso
        // ira retornar uma promise ; usando asssim .then  
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => console.log(setMovieis(data.results)))
    }, [])

    useEffect(() =>{

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => console.log(setPoptv(data.results)))


    },[])

    // console.log(data);

    return (

        <Container>
            <h1>Movies</h1>
            <MovieList>

                {movies.map(movie => {      // percorrendo o array e retornar algo , .map percorre algo 
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={`${image_url_movies}${movie.poster_path}`} alt={movie.title}></img>
                            </a>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })}

            </MovieList>

            <h1>Popular ON Tv</h1>
            <MovieList>

                {popTv.map(popTvs =>{
                    return(

                        <Movie key={popTvs.id}>
                            <a href="https://www.youtube.com"><img src={`${image_popTop}${popTvs.poster_path}`} alt={popTv.title}></img>
                            </a>

                            <span>{popTvs.original_name}</span>
                        </Movie>
                    )

                })}

            </MovieList>
        </Container>

        
    )
}


export default Home;