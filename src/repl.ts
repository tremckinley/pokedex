import { State } from "./state.js"

export function cleanInput(input: string): string[] {
        return input.toLowerCase().trim().split(" ").filter((word) => word !== "")
}

export function startREPL(state: State) {
        const rl = state.readline

        rl.prompt(),

        rl.on('line', (input) => {
                const cleaned = cleanInput(input);
                if (cleaned.length === 0) {
                        rl.prompt();
                        return
                }
                const commandName = cleaned[0];
                const commandArgs = cleaned.slice(1);

          const cmd = state.commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    try {
      cmd.callback(state, ...commandArgs);
    } catch (e) {
      console.log(e);
    }
                rl.prompt();
        })
} 