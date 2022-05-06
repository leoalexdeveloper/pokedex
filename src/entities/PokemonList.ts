import IPokemonList from "../interfaces/PokemonList"
import IPokemon from "../interfaces/Pokemon"
import Utils from "../utils/Utils"

export default class PokemonList<T extends IPokemon> implements IPokemonList<IPokemon>{
	constructor(
    public count:number,
    public next: string,
    public previous: string,
    public results: T[]
	){
		this.setPokemonId()
		this.setPokemonImg()
		this.capsFirstLetter()
	}

	setPokemonId(){
		this.results.forEach(pokemon => {
			const withoutLastSlash = pokemon.url.substring(0, pokemon.url.length-1)
			const indexOfLastSlash = withoutLastSlash.lastIndexOf("/")
			const id = withoutLastSlash.substring(indexOfLastSlash+1, withoutLastSlash.length)
			pokemon["id"] = Number(id)
		})
	}

	setPokemonImg(){
		this.results.forEach(pokemon => {
			const mainImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`
			const altImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`
			pokemon["img"] = {mainImg, altImg}
		})
	}

	capsFirstLetter(){
		this.results.forEach(pokemon => {
			pokemon.name = Utils.capsFirstLetter(pokemon.name)
		})
	}
}
