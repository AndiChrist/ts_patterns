import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private state: string = "";

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    detach(observer: Observer): void {
        this.observers = this.observers.filter((o) => o !== observer);
    }

    setState(state: string): void {
        console.log(`Subject: Neuer Zustand = "${state}"`);
        this.state = state;
        this.notify();
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this.state);
        }
    }
}
