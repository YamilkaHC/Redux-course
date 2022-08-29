import { configureStore } from '@reduxjs/toolkit'
import PokemonsSlice from '../reducers/pokemonsSlice'

export const store = configureStore({
    reducer: {
        pokemons: PokemonsSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch