import { Pokemon } from "./pokeAPI";
import { State } from "./state";

export async function commandCatch(state: State, pokemon: string, master: string): Promise<void> {
    let pokechoice: Pokemon;
    
    try {
        pokechoice = await state.pokeAPI.fetchPokemon(pokemon);
        
    } catch (e) {
      console.log(`Error retrieving ${pokemon} from API` + (e as Error).message)
      return
    }
    
    const catchRate = 1 - (pokechoice.base_experience/200);
    let ballStrength = Math.random();
    console.log(`Throwing a Pokeball at ${pokemon}...`);
    if (ballStrength < catchRate) {
        console.log(pokemon + " escaped!");
    } else {
        console.log(pokemon + " was caught!")
        state.pokedex[pokemon] = pokechoice;
    }
}