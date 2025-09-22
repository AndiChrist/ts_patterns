import { Target } from "./Target";
import { Adaptee } from "./Adaptee";

// Objektadapter -> enthält ein Adaptee-Objekt statt zu erben
export class Adapter implements Target {
    private adaptee: Adaptee;

    constructor(adaptee: Adaptee) {
        this.adaptee = adaptee;
    }

    request(): string {
        // Adapter übersetzt die Anfrage in einen Aufruf von Adaptee
        return this.adaptee.specificRequest();
    }
}
