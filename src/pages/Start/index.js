//
//  iNICIO NETFLIX 
//

import { Link } from "react-router-dom";
import { BoxIntro,MenuIntro } from "./style";



function Start(){

    return(
        <BoxIntro>
            <h1>PRIME<span>FLIX</span></h1>
            <p>Milhões de Filmes, Séries e Pessoas para Descobrir. Explore já.</p>

            <MenuIntro>
                <Link to={'/'}><button>Recently Movies </button></Link>
                <Link to={'/poptv'}><button>Popular on TV </button></Link>
                {/* <Link to={'/'}><button>Recently Movies </button></Link> */}
            </MenuIntro>
            
        </BoxIntro>
    )



}


export default Start
