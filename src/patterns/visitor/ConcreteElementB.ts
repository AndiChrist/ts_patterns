import { Element } from "./Element";
import { Visitor } from "./Visitor";

export class ConcreteElementB implements Element {
    operationB(): string {
        return "B spezifisches Verhalten";
    }

    accept(visitor: Visitor): void {
        visitor.visitConcreteElementB(this);
    }
}
