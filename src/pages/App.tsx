import PokemonCard from '../components/Card/card';
import Searcher from '../components/Search/Searcher';
import './App.css';

const App = () => {
  return (
    <div className="App">
    <header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@600;700&family=Dosis:wght@200;300;400&display=swap" rel="stylesheet" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
    </header>
    <div className="header">
      <div className="hr-vertial"></div>
      <div className="d-flex justify-content-between logo p-5 pb-0">
        <img alt="logo" width={120} src="/assets/logo.svg" />
      </div>
      <div className="d-flex justify-content-between">
        <div className="header-left ">
          <div className="hr-horizontal"></div>
          <h1 className="ps-5 pt-5 mt-5">POKEDUX</h1>
          <button className="ms-5 align-items-center button-header d-flex gap-2 justify-content-center">
            <img alt="pokeball button" src="/assets/pokemonButton.svg" />
            See pokemons
          </button>


          
          <div className="pokeball mb-5 ms-5 float-area">
            <img alt="pokeball" className="m-auto floating-img" src="/assets/pokeball.svg" />
          </div>
        

        </div>
        <div className="header-rigth"></div>
      </div>
      <div className="hr-horizontal top-1"></div>
    </div>

    <div className="mt-5 pt-5">
      <div className="search-div">
        <Searcher />
      </div>

      <div className="list-group d-grid">
      {["", "", "", "", "", ""].map(() => (
        <PokemonCard title={"Ditto"} img={""} text={"Fire and Magic"} />
      ))}
      </div>
    </div>
  </div>
  );
}

export default App;
