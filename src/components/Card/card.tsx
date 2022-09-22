import { useEffect, useState } from "react";
import { AbilitiesI } from "../../interfaces/abilities";
import { PokemonByName } from "../../interfaces/pokemonByName";
import pokemonsProvider from "../../providers/pokemons.provider";
import { PokemonCardI } from "./card.interface";


const Card = ({   pokemonData }: PokemonCardI) => {
  const [showInfo, setShowInfo] = useState(false);
  const [description, setDescription] =  useState("")

  const getCardInfo = async () => {

    const abilitiesResult: AbilitiesI = await pokemonsProvider.getAllPokemonsByAbility(pokemonData.ability || "")
setDescription(abilitiesResult?.effect_entries[1]?.effect || "")
console.log("abilitiesResult" , abilitiesResult)
    // setPokemonInfo({ ...pokemonInfo, ability: details?.abilities[0]?.ability?.name || ""  })
  }

  useEffect(()=> {
    if(showInfo){
    getCardInfo()
    }
  }, [showInfo])


  return (
    <>
      <div className={`flip-card ${showInfo ? "flip-card-active" : ""}`}>
        <div className="flip-card-inner">
          <div className="pokemon-card flip-card-front">
            <img className="pokemon-img" srcSet={`${pokemonData.img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={pokemonData.name} loading="lazy" src={pokemonData.img} />
            <div className="d-flex justify-content-around">
              <span onClick={() => setShowInfo(true)} className="text-18 text-card text-capitalize" > {pokemonData.name}</span>
              {false ? (
                <img className="start" alt="start" width={23} height={23} src="/assets/star.png" />
              ) : (
                <img className="start" alt="start-complete" width={23} height={23} src="/assets/starYellow.png" />
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
