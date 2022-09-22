import Provider from "./axiosBase";

class PokemonsProvider extends Provider {

    async getAllPokemons(offset: number ): Promise<any> {
        console.log('Here aaaaaaaaa!! ✨✨✨', offset)
        const response = await this.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`);
        return Promise.resolve(response);
    }

    async getAllPokemonsByAbility(ability: string ): Promise<any> {
        
        const response = await this.get(`https://pokeapi.co/api/v2/ability/${ability}`);
        return Promise.resolve(response);
    }

    async getPokemonByName(pokemonName: string ): Promise<any> {
        
        const response = await this.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        return Promise.resolve(response);
    }


    async getAllAbilities(offset: number): Promise<any> {
        const response = await this.get(`https://pokeapi.co/api/v2/ability?offset=${offset}&limit=40`);
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