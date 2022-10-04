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
import { PokemonReduxI, PokemonRowI } from "../../redux/types/pokemons";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

const Searcher = () => {
  const AbilitiesRedux: AbilitiesReduxI = useSelector((state: any) => state.abilities.data)
  const PokemonsRedux: PokemonReduxI = useSelector((state: any) => state.pokemons.data)
  const favorites: { data: Array<PokemonRowI> } = useSelector((state: any) => state.favorites)
  const dispatch = useDispatch()
  const [valueToSearch, setValueToSearch] = useState("")


  const getAbilities = async (_offset: number) => {
    await pokemonsProvider.getAllAbilities(_offset)
      .then((response: any) => {
        dispatch(setDataAbility({ data: [{ name: "favorites", url: "" }, ...response.results] || [] }))
        dispatch(setPaginationAbility({ limit: 40, offset: _offset, total: response.count }))
      })
  }

  useEffect(() => {
    getAbilities(0)
    DragScroll(".filter-div")
  }, [])

  const handlerAbility = (ability: string) => {
    dispatch(setFilters({ data: { ability: PokemonsRedux?.filter?.ability === ability || ability === "" ? "" : ability, search: "" } }))
    setValueToSearch("")
  }

  const handlerSearch = () => {
    dispatch(setFilters({ data: { ability: "", search: valueToSearch } }))
  }

  return (
    <>
      <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => { e.preventDefault(); handlerSearch() }}>
        <TextField
          InputProps={{
            endAdornment: (<InputAdornment className="cursor-pointer" position="start">
              <SearchIcon className="cursor-pointer" onClick={() => handlerSearch()} color="secondary" />
            </InputAdornment>),
          }}
          onChange={(e: any) => setValueToSearch(e.target.value)}
          value={valueToSearch}
          className="search"
          id="outlined-basic"
          variant="outlined"
          placeholder="search"
          color="secondary"
          focused
        />
      </form>


      <div className="d-flex filter-container align-items-end">
        <div className="filter-div d-flex justify-content-between align-items-end">

          {AbilitiesRedux?.data?.map((ability: any, index: number) => (
            <div onClick={() => handlerAbility(ability?.name)} key={`element-${index}`} className={`d-flex filter-badge gap-2 justify-content-between  ${PokemonsRedux.filter.ability === ability?.name && "filter-badge-active"}`}>

              {ability?.name !== "favorites" ?
                <span className={`text-nowrap text-capitalize`}>{ability?.name}</span>
                :
                <span className="d-flex gap-2 pe-1 justify-content-center align-items-center text-capitalize text-nowrap">
                  <img className="start" alt="start-complete" width={18} height={18} src="/assets/starYellow.png" />
                  {favorites.data.length}
                </span>
              }
            </div>
          ))}
        </div>
        <DeleteOutlinedIcon onClick={() => { handlerAbility(""); setValueToSearch("") }} className="cursor-pointer delete-button ms-2 mb-2" color="error" />
      </div>
    </>
  );
};
export default Searcher;
