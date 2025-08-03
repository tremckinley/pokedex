import type { State } from "./state.js";

export async function commandExplore(state: State, locationName: string): Promise<void> {
    let location: any;
    try {
        location = await state.pokeAPI.fetchLocation(locationName);
    } catch (e) {
        console.log(`Error retrieving ${locationName} from API` + (e as Error).message)
        return
    }
    
    const encounters: { pokemon: { name: string; url: string } }[] = location.pokemon_encounters;
    let pokemons: { name: string; url: string }[] = encounters.map((encounter) => encounter.pokemon);
    for (const pokemon of pokemons) {
        console.log(pokemon.name)
    }
    
};