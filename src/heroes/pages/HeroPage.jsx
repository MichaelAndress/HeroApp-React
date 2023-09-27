import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers/getHeroById";



export const HeroPage = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(()=> getHeroById( id ),[ id ]); 

  const heroImg =`/assets/heroes/${id}.jpg`;

  const onReturn=()=>{

     if (hero.publisher === 'Marvel Comics') {
        navigate("/marvel")
        // navigate(-1)
     }else{
        navigate("/dc")
     }
     
  }

  if ( !hero ) {
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5 cardd">
      <div className="col-4">
        <img src={ heroImg } alt={ hero.superhero } className="img-thumbnail animate__animated animate__fadeInLeft"/>
      </div>
      <div className="col-8">
        <h3 className="">{ hero.superhero }</h3>
        <hr />
        <ul className="list-group list-group-flush">
          <li className="mb-2 fs-6"><b>Alter Ego:</b> { hero.alter_ego } </li>
          <li className="mb-2 fs-6"><b>Publisher:</b> { hero.publisher } </li>
          <li className="fs-6"><b>First Appearance:</b> { hero.first_appearance } </li>
        </ul>

        <h5 className="mt-3 ">Characters</h5>
        <hr />
        <p className="fs-6">{ hero.characters }</p>
        <button className="btn btn-primary" onClick={ onReturn }>Regresar</button>
      </div>
    </div>

  )
}
