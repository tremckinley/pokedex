import type { State } from "./state.js";

export async function commandExplore(state: State, locationName: string): Promise<void> {
    const location = await state.pokeAPI.fetchLocation(locationName);
    const encounters =  location.pokemon_encounters;
    let pokemons: {name: string, url: string}[] = encounters.map(encounter => encounter.pokemon);
    for (const pokemon of pokemons) {
        console.log(pokemon.name)
    }
    
};