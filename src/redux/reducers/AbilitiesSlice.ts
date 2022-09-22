import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AbilitiesReduxI, AbilityRowI, PaginationI } from '../types/abilities';



export const Abilities: { data: AbilitiesReduxI } = {
    data: {
        offset: 0,
        limit: 0,
        total: 0,
        data: []
    }

}


export const AbilitiesSlice = createSlice({
    initialState: Abilities,
    name: 'POKEMONS',
    reducers: {
        setPaginationAbility: (state: { data: AbilitiesReduxI }, action: PayloadAction<PaginationI>) => {
            state.data.offset = action.payload.offset
            state.data.limit = action.payload.limit
            state.data.total = action.payload.total
        },
        setDataAbility: (state: { data: AbilitiesReduxI }, action: PayloadAction<{ data: Array<AbilityRowI> }>) => {
            state.data.data = action.payload.data
        },

        handlerClear: () => Abilities
    }
})
export const { setPaginationAbility, handlerClear, setDataAbility } = AbilitiesSlice.actions;
export default AbilitiesSlice.reducer;