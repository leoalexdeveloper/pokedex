//import interfaces
import IPokemonAttrs from "../interfaces/PokemonAttrs"

//import types
import type { TAbilities, TSpecies, TTypes, TStats } from "../types/PokemonAttrs"
import type { TImg } from "../types/Pokemon"

export default class PokemonAttrs implements IPokemonAttrs{
	constructor(
        public id:number,
        public img:TImg,
        public abilities:TAbilities,
        public species:TSpecies,
        public types:TTypes,
        public stats:TStats
	){}
}
