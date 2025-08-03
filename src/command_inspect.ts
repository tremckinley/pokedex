import { State } from "./state";

export async function commandInspect(state: State, pokemon: string): Promise<void> {
    const inspected = state.pokedex[pokemon] ?? undefined;
    if (!inspected) {
        console.log(`No entry for ${pokemon} found...`)
        return
    }
    console.log("Name: "+inspected.name)
    console.log("Height: " + inspected.height);
    console.log("Weight " + inspected.weight);
    console.log("Stats:")
    for (const value of Object.values(inspected.stats)) {
       const statLevel = value.base_stat;
       const statName = value.stat.name;
       console.log(`  -${statName}: ${statLevel}`)
    };
    console.log("Types:")
    for (const typeObj of Object.values(inspected.types)) {
        console.log(`  - ${typeObj.type.name}`)
    }
 
}
