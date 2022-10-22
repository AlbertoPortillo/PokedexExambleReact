import { PokemonListItem, PokemonDetails } from "./pokemons"

export interface responseList{
    error: boolean,
    data?: PokemonListItem[]
    msg?: string
}

export interface responseDetails{
    error: boolean,
    data?: PokemonDetails
    msg?: string
}