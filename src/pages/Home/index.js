import { Container, MovieList, Movie } from "./style";





function Home() {

    const moveis = [
        {
            id: 1,
            title: 'Spider-Man',
            image_url: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Jurassic_World_2015.jpg'
        },
        {
            id: 2,
            title: 'Juras What Park',
            image_url: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Jurassic_World_2015.jpg'
        },
        {
            id: 3,
            title: 'Strange Spider',
            image_url: 'https://upload.wikimedia.org/wikipedia/pt/4/4d/Jurassic_World_2015.jpg'
        }
    ]

    return (
        <Container>
            <h1>Movies</h1>
            <MovieList>
                                            
                {moveis.map(movie => {      // percorrendo o array e retornar algo , .map percorre algo 
                    return (
                        <Movie key={movie.id}>
                            <a href="https://google.com.br"><img src={movie.image_url} alt={movie.title}></img>
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