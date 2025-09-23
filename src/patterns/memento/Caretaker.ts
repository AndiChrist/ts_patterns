import { Memento } from "./Memento";

export class Caretaker {
    private mementos: Memento[] = [];

    addMemento(memento: Memento): void {
        this.mementos.push(memento);
    }

    getMemento(index: number): Memento {
        return this.mementos[index];
    }
}
