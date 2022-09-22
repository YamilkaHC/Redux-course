import { configureStore } from '@reduxjs/toolkit'
import AbilitiesSlice from '../reducers/AbilitiesSlice'
import PokemonsSlice from '../reducers/pokemonsSlice'

export const store = configureStore({
    reducer: {
        pokemons: PokemonsSlice,
        abilities: AbilitiesSlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch