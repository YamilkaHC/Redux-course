import Provider from "./axiosBase";

class PokemonsProvider extends Provider {

    async getAllPokemons(offset: number): Promise<any> {
        const response = await this.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
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