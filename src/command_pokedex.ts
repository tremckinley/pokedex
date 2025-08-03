import { stat } from "fs";
import { State } from "./state";

export async function commandPokedex(state: State) {
    for (const pokemonName of Object.keys(state.pokedex)) {
        console.log(" - " + pokemonName)
    }
}