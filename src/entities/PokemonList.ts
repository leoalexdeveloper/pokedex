import IPokemonList from "../interfaces/PokemonList"
import IPokemon from "../interfaces/Pokemon"

export default class PokemonList<T extends IPokemon> implements IPokemonList<IPokemon>{
	constructor(
        public count:number,
        public next: string,
        public previous: string,
        public results: T[]
	){}
}