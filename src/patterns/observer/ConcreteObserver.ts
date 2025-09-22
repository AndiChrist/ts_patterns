import { Observer } from "./Observer";

export class ConcreteObserver implements Observer {
    constructor(private name: string) {}

    update(state: string): void {
        console.log(`${this.name} hat Benachrichtigung erhalten: Zustand = "${state}"`);
    }
}
