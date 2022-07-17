import ImageList from "@mui/material/ImageList";
import PokemonCard from "../../components/PokemonCard";
import Searcher from "../../components/Searcher";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@600;700&family=Dosis:wght@200;300;400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
      </header>
      <div className="header">
        <div className="hr-vertial"></div>
        <div className="d-flex justify-content-between logo p-5">
          <img width={120} src="/assets/logo.svg" />
        </div>
        <div className="d-flex justify-content-between">
          <div className="header-left ">
            <div className="hr-horizontal"></div>
            <h1 className="ps-5 pt-5 mt-5">POKEDUX</h1>
            <button className="ms-5 align-items-center button-header d-flex gap-2 justify-content-center">
              <img src="/assets/pokemonButton.svg" />
              See pokemons
            </button>

            <div className="pokeball">
              <img src="/assets/pokeball.svg" />
            </div>
          </div>
          <div className="header-rigth">
            <img src="/assets/" />
          </div>
        </div>
      </div>

      {/* <div className="search-div">
        <Searcher />
      </div>

      <ImageList style={{ margin: "1rem 0rem" }} sx={{ width: "100%" }}>
        <PokemonCard title={"Ditto"} img={""} text={"Fire and Magic"} />
      </ImageList>
     */}
    </div>
  );
}

export default App;
