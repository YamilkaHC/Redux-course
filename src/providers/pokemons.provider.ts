import Provider from "./axiosBase";

class PokemonsProvider extends Provider {

    async getAllPokemons(): Promise<any> {
        const response = await this.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=40`);
        return Promise.resolve(response);
    }


    async getOnePokemon(url: string): Promise<any> {
        const response = await this.get(url);
        return Promise.resolve(response);
    }


    async getPokemonDescription(url: string): Promise<any> {
        const response = await this.get(url);
        return Promise.resolve(response);
    }



}

const pokemonsProvider = new PokemonsProvider("")
export default pokemonsProvider;