import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import BannerPage from '../components/Banner/Banner';
import PokemonCard from '../components/Card/card';
import Error from '../components/Error/Error';
import Header from '../components/Header/Header';
import Searcher from '../components/Search/Searcher';
import Skeleton from '../components/Skeleton/Skeleton';
import { AbilitiesI, PokemonEntity } from '../interfaces/abilities';
import { resultPokeListI, resultRowI } from '../interfaces/pokemon';
import { PokemonByName } from '../interfaces/pokemonByName';
import pokemonsProvider from '../providers/pokemons.provider';
import { setData, setPagination } from '../redux/reducers/pokemonsSlice';
import { PokemonReduxI, PokemonRowI } from '../redux/types/pokemons';
import './App.css';


const Home = () => {

  const dataRedux: PokemonReduxI = useSelector((state: any) => state.pokemons.data)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  const getAll = async (_offset: number) => {
    let pokemonsList: PokemonRowI[] = []

    await pokemonsProvider.getAllPokemons(_offset)
      .then((response: resultPokeListI) => {
        pokemonsList = response?.results?.map((row?: resultRowI) => { return { name: row?.name } })
        dispatch(setPagination({ limit: 20, offset: _offset, total: response.count }))
      })

    GetPokemonsImages(_offset, pokemonsList)
  }

  const getByAbility = async (ability: string) => {
    setLoading(true)
    let pokemonsList: PokemonRowI[] | any = []

    await pokemonsProvider.getAllPokemonsByAbility(ability)
      .then((response: AbilitiesI) => {
        pokemonsList = response?.pokemon?.map((pokemonItem?: PokemonEntity) => { return { name: pokemonItem?.pokemon.name || "" } })
        dispatch(setPagination({ limit: response?.pokemon?.length || 0, offset: 0, total: response?.pokemon?.length || 0 }))
      })

    GetPokemonsImages(0, pokemonsList)
  }

  const GetPokemonsImages = async (_offset: number, pokemonsList: Array<{ name: string }> | any) => {
    pokemonsList = await Promise.all(
      pokemonsList.map(async (pokemon: resultRowI) => {
        const details: PokemonByName  = await pokemonsProvider.getPokemonByName(pokemon?.name || "")
        return details?.data !== "Not Found" && { name: pokemon.name, img: details?.sprites?.other?.dream_world?.front_default || details?.sprites?.front_default || details?.sprites?.other?.[`official-artwork`]?.front_default,
         weight: details.weight, ability: details?.abilities[0]?.ability?.name || "none" }
      })
    )
    pokemonsList = pokemonsList[0] === false ? [] : pokemonsList
    dispatch(setData({ data: _offset !== 0 ? [...dataRedux.data, ...pokemonsList] : pokemonsList }))
    setLoading(false)

    return pokemonsList
  }

  const GetPokemonsByName = async () => {
    const pokemonList: PokemonRowI[] = await GetPokemonsImages(0, [{ name: `${dataRedux.filter.search}` }])
    dispatch(setPagination({ limit: pokemonList.length, offset: 0, total: pokemonList.length }))
  }

  useEffect(() => {

    if (dataRedux.filter.ability) getByAbility(dataRedux.filter.ability)
    else if (dataRedux.filter.search) GetPokemonsByName()
    else getAll(0)

  }, [dataRedux.filter.ability, dataRedux.filter.search])


  return (
    <div className="App">
      <Header />
      <BannerPage />
      <div className="mt-5 pt-5 scrollableDiv">
        <div className="search-div">
          <Searcher />
        </div>
        <InfiniteScroll
          dataLength={dataRedux.data.length}
          next={() => getAll(dataRedux.offset + 20)}
          hasMore={dataRedux.data.length >= dataRedux.total ? false : true}
          loader={<Skeleton />}
          endMessage={dataRedux.data.length ? <p className='fw-lighter text-white text-center' >Yay! You have seen it all </p> : <></>}
        >

          {!loading ?
            dataRedux?.data.length ?
              <div id="search-sections" className="list-group d-grid py-5 position-relative">
                {dataRedux?.data?.map((pokemon: PokemonRowI, index: number) => (
                  <PokemonCard key={`pokemon-card-${index}`} pokemonData={pokemon} />
                ))
                }
              </div>
              :
              <Error errorMessage="There aren't pokemon to show" customStyle="font-18" />
            :
            <div id="search-sections" className="list-group d-grid py-5 position-relative">
              <Skeleton size={20} />
            </div>
          }
        </InfiniteScroll>
      </div>
    </div>
  );
}

export default Home;
