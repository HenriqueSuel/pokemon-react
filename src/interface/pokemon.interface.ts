export interface IResponsPokemonTypes {
    results: Array<IPokemon>;

}


export interface IPokemon {
    name: string;
    url: string;
}


export interface IResponsePokemon {
    pokemon: Array<INamePokemon>;
}

export interface INamePokemon {
    pokemon: IPokemon
}