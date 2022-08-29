import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from '../components/Card/card';
import Searcher from '../components/Search/Searcher';
import provider from '../providers/axiosBase';
import pokemonsProvider from '../providers/pokemons.provider';
import { PokemonRowI, setData, setPagination } from '../redux/reducers/pokemonsSlice';
import './App.css';



const App = () => {

  const dataRedux: any = useSelector((state: any) => state.pokemons)
  const dispatch = useDispatch()



  useEffect(() => {
    // dispatch(setData("hello word pokemos"))
  }, [])

  useEffect(() => {
    let pokemonsList: PokemonRowI[] = []

    pokemonsProvider.getAllPokemons()
      .then((response: any) => {
        pokemonsList = response?.results?.map((row?: { name?: string, url?: string }) => {
          return { name: row?.name, url: row?.url }
        })
        dispatch(setPagination({ limit: 10, offset: 0, total: response.count }))
      })
      .catch((err: any) => console.log('err3!! ✨✨✨', err))

    // pokemonsList = pokemonsList.map(async (pokemon: { name?: string, url?: string }) => {

    //   const details = await pokemonsProvider.getOnePokemon(pokemon?.url as string)

    //   return ({ name: pokemon.name, image: details?.sprites?.other?.dream_world?.front_default })
    //   // .then((response: any) => { return ({ name: row?.name, image: response?.sprites?.other?.dream_world?.front_default }) })
    //   // .catch((error: any) => { return ({ name: row?.name }) })
    // }
    // ) as  PokemonRowI[]

    console.log('pokemonsList!! ✨✨✨', pokemonsList)


    dispatch(setData({ data: pokemonsList }))
  }, [])

  return (
    <div className="App">
      <header>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil+Display:wght@600;700&family=Dosis:wght@200;300;400&display=swap" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></script>

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
