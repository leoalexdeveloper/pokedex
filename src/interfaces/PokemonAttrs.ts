import type { TAbility, TSpecie, TType, TStat } from "../types/PokemonAttrs"
export default interface IPokemonAttrs{
    abilities: TAbility,
    species: TSpecie,
    types: TType,
    stats: TStat
}