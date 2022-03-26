import { useEffect, useState } from "react"
import { Link , useParams } from "react-router-dom"
import { Container } from "./style"

function Details() {

    const { id } = useParams()

    const [movies, setMovies] = useState({})
    const image_url_movies = `https://image.tmdb.org/t/p/w500/`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&&language=en-US&page=1`)
        
            .then(response => response.json())
            .then(data => {

                const infoMovies = {
                    id,
                    title: data.title,
                    sinopse: data.overview,
                    image: `${image_url_movies}${data.poster_path}`,
                    realeaseDate: data.release_date
                }

                setMovies(infoMovies)
                
                
            })
    }, [id])               // toda vez que o ID mudar o useEffect é ativado dnv

    return (
        <Container>
            <div className="movie">
                <img src={movies.image} alt={movies.title}></img>
                <div className="details">
                    <h1>{movies.title}</h1>
                    <span>Sinopse: {movies.sinopse}</span>
                    <span className="releaseDate">Release Data: {movies.realeaseDate}</span>
                    <Link to='/' ><button>Back to Movies</button></Link>
                </div>
            </div>
        
        </Container>
    )
}


export default Details