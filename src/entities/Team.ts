//import interfaces
import ITeam from "../interfaces/Team"
import IPokemon from "../interfaces/Pokemon"

//import external module
import {v4 as uuidv4} from "uuid"

export default class Team<T extends IPokemon> implements ITeam<IPokemon>{
	public readonly uuid:string = uuidv4()
	public readonly createdAt: number = Date.now()
	public updatedAt = 0
	public team:T[] = []
	constructor(
        public name:string
	){
		this.setUpdatedAt()
	}

	setUpdatedAt(){
		this.updatedAt = Date.now()
	}
}
