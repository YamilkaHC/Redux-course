


export interface AbilitiesReduxI {
    offset: number
    limit: number
    data: Array<AbilityRowI>
    total: number
}

export interface AbilityRowI {
    id?: number
    name?: string
    img?: string
    element?: string
    linkDescription?: string
    description?: string

}


export interface PaginationI {
    offset: number
    limit: number
    total: number
}
