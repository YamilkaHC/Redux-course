import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FilterI, PaginationI, PokemonReduxI, PokemonRowI } from '../types/pokemons';


export const Pokemons: { data: PokemonReduxI } = {
    data: {
        offset: 0,
        limit: 0,
        total: 0,
        data: [],
        filter: { ability: "", search: "" }
    }

}


export const PokemonsSlice = createSlice({
    initialState: Pokemons,
    name: 'POKEMONS',
    reducers: {
        setPagination: (state: { data: PokemonReduxI }, action: PayloadAction<PaginationI>) => {
            state.data.offset = action.payload.offset
            state.data.limit = action.payload.limit
            state.data.total = action.payload.total
        },
        setData: (state: { data: PokemonReduxI }, action: PayloadAction<{ data: Array<PokemonRowI> }>) => {
            state.data.data = action.payload.data
        },
        setFilters: (state: { data: PokemonReduxI }, action: PayloadAction<{ data: FilterI }>) => {
            state.data.filter.ability = action.payload.data.ability
            state.data.filter.search = action.payload.data.search
        },
        handlerClear: () => Pokemons
    }
})
export const { setPagination, handlerClear, setData, setFilters } = PokemonsSlice.actions;
export default PokemonsSlice.reducer;