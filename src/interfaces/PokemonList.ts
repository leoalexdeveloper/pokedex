import IPokemon from "../interfaces/Pokemon"

export default interface IPokemonList<T extends IPokemon>{
    count: number,
    next: string,
    previous: string,
    results: T[]
}
