import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import queryString from "query-string"
import { getHeroByName } from "../helpers/getHeroByName";
import { Navbar } from "../../ui";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { q = '' } = queryString.parse(location.search)
  console.log(q);
  const heroes = getHeroByName ( q );

  const showSearch = (q.length === 0);
  const showError = (q.length > 0) && heroes.length === 0;

  const { searchText, onInputChange } = useForm({
    searchText: q
  });


  const onSearchSubmit=(e)=>{
    e.preventDefault();
    // if ( searchText.trim().length <= 1) {
    //   return
    // };

    navigate(`?q=${ searchText}`)
   

  }


  return (
    <>
    <Navbar/>
      <div className="row ">
        <h1>Search</h1>
        <hr />
        <div className="gridd">
        <div className="">
          <h4>Busqueda</h4>
          <hr />
          <form action="" onSubmit={ onSearchSubmit }>
            <input value={ searchText } onChange={ onInputChange } type="text" className="form-control" placeholder="Buscar heroe" name="searchText" autoComplete="off" />
            <button className="btn btn-success mt-2">Buscar</button>
          </form>
        </div>
        <div className="">
          <h4>Resultado</h4>
          <hr />  

          {/* {
            (q === '')
            ? 
            <div className="alert alert-danger">Heroe <b>{ q }</b> no encontrado</div>
            : (heroes.length === 0) &&
            <div className="alert alert-danger">Buscar Heroes</div>
          } */}



            <div className="alert alert-success animate__animated animate__fadeIn" style={{display: showSearch ? '' : 'none'}}>
              Buscar Heroes
            </div>

            <div className="alert alert-danger animate__animated animate__fadeIn" style={{display: showError ? '' : 'none'}}>
              Heroe <b>{ q }</b> no encontrado
            </div>


          {
            heroes.map(hero =>(
              <HeroCard key={hero.id} {...hero} /> 
            ))
          }
        </div>
        </div>
          
      </div>
    </>
  )
}
