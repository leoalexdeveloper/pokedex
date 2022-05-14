//import types
import type { TAbilities, TSpecies, TTypes, TStats } from "../types/PokemonAttrs"
import type { TImg } from "../types/Pokemon"

interface IPokemonAttrs{
    id:number,
    img: TImg,
    abilities: TAbilities,
    species: TSpecies,
    types: TTypes,
    stats: TStats
}

export default IPokemonAttrs
