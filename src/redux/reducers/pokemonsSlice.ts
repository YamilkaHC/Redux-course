import { createSlice, PayloadAction } from '@reduxjs/toolkit';



export interface PokemonReduxI {
    offset: number
    limit: number
    data: Array<PokemonRowI>
    total: number
}

export interface PokemonRowI {
    id?: number
    name?: string
    img?: string
    element?: string
    linkDescription?: string
    description?: string

}



export const Pokemons: { data: PokemonReduxI } = {
    data: {
        offset: 0,
        limit: 0,
        total: 0,
        data: []
    }

}

export interface PaginationI {
    offset: number
    limit: number
    total: number
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

        handlerClear: () => Pokemons
    }
})
export const { setPagination, handlerClear, setData } = PokemonsSlice.actions;
export default PokemonsSlice.reducer;