import IPokemon from "./Pokemon"
export default interface Team<T extends IPokemon>{
    uuid:string
    name:string
    team: T[]
    createAt:number
    updatedAt:number
}