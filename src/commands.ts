import { CLICommand } from "./state.js";
import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMapForward, commandMapBack } from "./command_map.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp
    },
   map: {
      name: "map",
      description: "Get the next page of locations",
      callback: commandMapForward
    },
    mapb: {
      name: "mapb",
      description: "Get the previous page of locations",
      callback: commandMapBack
    },
    explore: {
      name: "explore",
      description: "find out what pokemon are in the area you choose",
      callback: commandExplore
    },
    catch: {
      name: "catch",
      description: "choose a pokemon to try and catch",
      callback: commandCatch
    },
    inspect: {
      name: "inspect",
      description: "inspect the details about any pokemon you've caught",
      callback: commandInspect
    },
    pokedex: {
      name: "pokedex",
      description: "list the names of all the Pokemon in the Pokedex",
      callback: commandPokedex
    }
  };
}

