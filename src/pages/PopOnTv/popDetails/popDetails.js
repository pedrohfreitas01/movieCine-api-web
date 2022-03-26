import { useEffect, useState } from "react"
import { Link , useParams } from "react-router-dom"
import { Caixa } from "./detailStyled"


function PopDetails(){

    const { id } = useParams()

    const [popTv, setPoptv] = useState({})
    const image_url_popTv =  `https://image.tmdb.org/t/p/w500/`

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=2e963f4c3e1b02490fac8abe4f9fddcb&&language=en-US`)
        
        .then(response => response.json())
        .then(data => {

            const infoPopTv = {
                id,
                title: data.title,
                sinopse : data.overview,
                image : `${image_url_popTv}${data.poster_path}`,
                releaseDate: data.release_date
                
            }

            setPoptv(infoPopTv)

            
        })
    }, [id])

    return (
        <Caixa>
            <h1>{popTv.title}</h1>
             <div className="popTv"> 
                <img src={popTv.image} alt={popTv.title}></img>
                <div className="details">
                    
                    <span>Sinopse: {popTv.sinopse}</span>
                    <span className="releaseDate">Release Data: {popTv.releaseDate}</span>
                    <Link to='/start' ><button>Back </button></Link>
                </div>
                
             </div>
        
        </Caixa>
    )
}

export default PopDetails ; 