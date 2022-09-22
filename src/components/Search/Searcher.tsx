import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField/TextField";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DragScroll from "../../helpers/dragScroll.helper";
import pokemonsProvider from "../../providers/pokemons.provider";
import { setDataAbility, setPaginationAbility } from "../../redux/reducers/AbilitiesSlice";
import { setFilters } from "../../redux/reducers/pokemonsSlice";
import { AbilitiesReduxI } from "../../redux/types/abilities";
import { PokemonReduxI } from "../../redux/types/pokemons";

const Searcher = () => {
  const AbilitiesRedux: AbilitiesReduxI = useSelector((state: any) => state.abilities.data)
  const PokemonsRedux: PokemonReduxI = useSelector((state: any) => state.pokemons.data)
  const dispatch = useDispatch()
  const [valueToSearch, setValueToSearch] =  useState("")


  const getAbilities = async (_offset: number) => {
    await pokemonsProvider.getAllAbilities(_offset)
      .then((response: any) => {
        dispatch(setDataAbility({ data: [...AbilitiesRedux.data, ...response.results] || [] }))
        dispatch(setPaginationAbility({ limit: 40, offset: _offset, total: response.count }))
      })
  }

  useEffect(() => {
    getAbilities(0)
    DragScroll(".filter-div")
  }, [])

  const handlerAbility = (ability: string) => {
    dispatch(setFilters({ data: { ability: PokemonsRedux?.filter?.ability === ability? "" : ability, search: "" } }))
  }

  const handlerSearch = () => {
    dispatch(setFilters({ data: { ability: "", search: valueToSearch } }))
  }

  return (
    <>
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=> { e.preventDefault(); handlerSearch() }}>
      <TextField
        InputProps={{ endAdornment: (<InputAdornment className="cursor-pointer" position="start"> 
        <SearchIcon className="cursor-pointer" onClick={()=> handlerSearch() } color="secondary" /> 
        </InputAdornment>), }}
        onChange={(e: any) => setValueToSearch(e.target.value)}
        className="search"
        id="outlined-basic"
        variant="outlined"
        placeholder="search"
        color="secondary"
        focused
      />
      </form>


      <div className="filter-div d-flex justify-content-between align-items-end">
        {AbilitiesRedux?.data?.map((ability: any, index: number) => (
          <div onClick={() => handlerAbility(ability?.name)} key={`element-${index}`} className={`d-flex filter-badge gap-2 justify-content-between  ${PokemonsRedux.filter.ability === ability?.name && "filter-badge-active"}`}>
            <span className={`text-nowrap text-capitalize`}>{ability?.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};
export default Searcher;
