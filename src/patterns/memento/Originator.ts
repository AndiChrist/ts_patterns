import { Memento } from "./Memento";

export class Originator {
    private state: string = "";

    setState(state: string): void {
        console.log(`Originator: Zustand setzen = "${state}"`);
        this.state = state;
    }

    save(): Memento {
        console.log("Originator: Zustand wird gespeichert.");
        return new Memento(this.state);
    }

    restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(`Originator: Zustand wiederhergestellt = "${this.state}"`);
    }
}
