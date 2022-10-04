import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonRowI } from '../types/pokemons';


export const PokemonsFavorites: { data: Array<PokemonRowI> } = {
    data: []
}


export const PokemonsFavoritesSlice = createSlice({
    initialState: PokemonsFavorites,
    name: 'POKEMONS_FAVORITES',
    reducers: {
      
        setDataFavorites: (state: { data: Array<PokemonRowI> }, action: PayloadAction<{ data: Array<PokemonRowI> }>) => {
            state.data = action.payload.data
        },
        handlerClear: () => PokemonsFavorites
    }
})
export const { handlerClear, setDataFavorites } = PokemonsFavoritesSlice.actions;
export default PokemonsFavoritesSlice.reducer;