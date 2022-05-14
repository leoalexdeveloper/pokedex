//import interfaces
import IPokemon from "./Pokemon"

export default interface Team<T extends IPokemon>{
    uuid:string
    name:string
    team: T[]
    createdAt:number
    updatedAt:number
}
