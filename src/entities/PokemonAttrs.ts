import IPokemonAttrs from "../interfaces/PokemonAttrs"
import type { TAbility, TSpecie, TType, TStat } from "../types/PokemonAttrs"
export default class PokemonAttrs implements IPokemonAttrs{
	constructor(
        public abilities:TAbility,
        public species:TSpecie,
        public types:TType,
        public stats:TStat
	){}
}