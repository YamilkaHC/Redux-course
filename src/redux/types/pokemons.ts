
export interface PokemonReduxI {
    offset: number
    limit: number
    data: Array<PokemonRowI>
    total: number
    filter: FilterI
}

export interface FilterI {
    ability: string
    search: string
}

export interface PokemonRowI {
    name?: string
    img?: string
    ability?: string
    weight? : number | string

}

export interface PaginationI {
    offset: number
    limit: number
    total: number
}

