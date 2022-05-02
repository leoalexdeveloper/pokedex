import IPokemon from "../interfaces/Pokemon"
import { TImg } from "../types/Pokemon"

class Pokemon implements IPokemon{
	constructor(
		public id:number,
		public name:string,
		public url:string,
		public img: TImg
	){}
}
export default Pokemon