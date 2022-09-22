export interface resultPokeListI {
    count: number
    next: string
    previous: string
    results: Array<resultRowI>
  }
  
  export interface resultRowI {
    name?: string
  }

