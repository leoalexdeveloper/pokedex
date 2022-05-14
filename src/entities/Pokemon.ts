//import interfaces
import IPokemon from "../interfaces/Pokemon"

//import types
import type { TImg } from "../types/Pokemon"

class Pokemon implements IPokemon{
	constructor(
		public id:number,
		public name:string,
		public url:string,
		public img: TImg
	){}
}
export default Pokemon
