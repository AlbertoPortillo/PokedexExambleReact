export interface PokemonListItem{
    id: number
    name: string
    sprites: Sprites
}

export interface PokemonDetails{
    id: number
    name: string
    sprites: Sprites
    moves: MovePokemon[]
}

export interface MovePokemon{
    name: string
    url: string
}

export interface Sprites{
    back_default: string
    back_female: string
    back_shiny:string
    back_shiny_female:string
    front_default:string
    front_female:string
    front_shiny:string
    front_shiny_female:string
    other: any
    version: any
}

export interface Abilities{
    is_hidden: boolean
    name: string
    url: string
}