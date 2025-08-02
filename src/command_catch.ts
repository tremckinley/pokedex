import { State } from "./state";

export async function commandCatch(state: State, pokemon: string): Promise<void> {
    const pokechoice = await state.pokeAPI.fetchPokemon(pokemon);
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