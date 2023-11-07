import { Link, NavLink, useNavigate } from "react-router-dom";

export const HeroCard = ({ id,superhero,publisher,alter_ego,first_appearance,character }) => {

<<<<<<< HEAD
  const heroImg =`../../../assets/heroes${id}.jpg`;
=======
  const heroImg =`../assets/heroes/${id}.jpg`;
>>>>>>> b7c65608383a33e054ed6f3b9feb3c82d1cbc920



  return (
    <div className="col animate__animated animate__fadeIn">
        <div className="card cardd">
            <div className="row no-gutters">
                <div className="col-4 ">
                    <img src={ heroImg } className="card-img m-1" alt={ superhero } />
                </div>
                <div className="col-8">
                  <div className="card-body">
<<<<<<< HEAD
                    <h3 className="cart-tittle">{ superhero }!!!</h3>
=======
                    <h3 className="cart-tittle">{ superhero } ppp</h3>
>>>>>>> b7c65608383a33e054ed6f3b9feb3c82d1cbc920
                    <p className="cart-text">{ alter_ego }</p>

                    {
                      (alter_ego !== character ) && (<p>{ character }</p>)
                    }
                    
                    <p className="">{ first_appearance }</p>

                    <Link className="btn btn-danger" to={`/hero/${id}`}>
                      Mas...
                    </Link> 
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}
