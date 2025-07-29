import { createInterface } from "readline";
export function cleanInput(input) {
    return input.toLowerCase().trim().split(" ").filter((word) => word !== "");
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > "
    });
    rl.prompt(),
        rl.on('line', (input) => {
            const cleaned = cleanInput(input);
            if (cleaned.length === 0) {
                rl.prompt();
                return;
            }
            const commandName = cleaned[0];
            console.log("Your command was: " + commandName);
            rl.prompt();
        });

    
    const commands = getCommands();
    const cmd = commands[commandName];
    if (!cmd) {
      console.log(
        `Unknown command: "${commandName}". Type "help" for a list of commands.`,
      );
      rl.prompt();
      return;
    }

    try {
      cmd.callback(commands);
    } catch (e) {
      console.log(e);
    }

    rl.prompt();
  }

