import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AbilitiesI } from "../../interfaces/abilities";
import pokemonsProvider from "../../providers/pokemons.provider";
import { setDataFavorites } from "../../redux/reducers/pokemonsFavoritesSlice";
import { PokemonRowI } from "../../redux/types/pokemons";
import { PokemonCardI } from "./card.interface";


const Card = ({ pokemonData }: PokemonCardI) => {
  const [showInfo, setShowInfo] = useState(false);
  const [description, setDescription] = useState("")
  const favorites: { data: Array<PokemonRowI> } = useSelector((state: any) => state.favorites)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('$!!!favorites ✨✨✨', favorites?.data?.find((pokemon : PokemonRowI)=> pokemonData?.name === pokemon?.name ))
  }, [favorites])

  const getCardInfo = async () => {

    const abilitiesResult: AbilitiesI = await pokemonsProvider.getAllPokemonsByAbility(pokemonData.ability || "")
    setDescription(abilitiesResult?.effect_entries[1]?.effect || "")
    console.log("abilitiesResult", abilitiesResult)
  }

  useEffect(() => {
    if (showInfo) {
      getCardInfo()
    }
  }, [showInfo])

  const handlerFavorite = (method: string) => {
    if(method == "add") dispatch(setDataFavorites({data: [...favorites?.data, {...pokemonData}] }))
    else dispatch(setDataFavorites({data: favorites?.data?.filter((pokemon : PokemonRowI)=> pokemonData?.name !== pokemon?.name ) }))
  }

  return (
    <>
      <div className={`flip-card ${showInfo ? "flip-card-active" : ""}`}>
        <div className="flip-card-inner">
          <div className="pokemon-card flip-card-front">
            <img className={`pokemon-img ${String(pokemonData?.img).includes("dream-world") ? "" : "h140"}`} srcSet={`${pokemonData.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={pokemonData.name} loading="lazy" src={pokemonData.img} />
            <div className="d-flex justify-content-around">
              <span onClick={() => setShowInfo(true)} className="text-18 text-card text-capitalize" > {pokemonData.name}</span>
              {favorites?.data?.find((pokemon : PokemonRowI)=> pokemonData?.name === pokemon?.name ) ? (
                <img onClick={()=> handlerFavorite("remove")} className="start" alt="start-complete" width={23} height={23} src="/assets/starYellow.png" />
                ) : (
                <img onClick={()=> handlerFavorite("add")} className="start" alt="start" width={23} height={23} src="/assets/star.png" />
              )}
            </div>
          </div>

          <div onMouseLeave={() => setShowInfo(false)} className="flip-card-back pokemon-card justify-content-evenly" >
            <div className=" d-flex justify-content-start ps-4">
              <span className="text-18 text-capitalize">{pokemonData.name}</span>
            </div>
            <p className="text-white p-card">
              {description.slice(0, 200)}...
            </p>
            <div className="d-flex justify-content-end">
              <span className="p-card text-18  text-capitalize text-card read-more" //onClick={() => setOpen(true)}
              >Reade more...</span>
              {/* <span className="p-card text-18 text-card">Reade more...</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
