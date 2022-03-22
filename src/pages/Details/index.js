import { useParams } from "react-router-dom"



//useparams == id



function Details(){

    const {id} = useParams()
    console.log(id);

    return(
        <h1>Pagina de detalhes</h1>
    )
}

export default Details