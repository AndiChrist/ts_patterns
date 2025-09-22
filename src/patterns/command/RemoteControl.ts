import { Command } from "./Command";

export class RemoteControl {
    private history: Command[] = [];

    executeCommand(command: Command): void {
        command.execute();
        this.history.push(command);
    }

    undoLast(): void {
        const command = this.history.pop();
        if (command) {
            console.log("Undo:");
            command.undo();
        } else {
            console.log("Nichts zum Rückgängig machen.");
        }
    }
}
