import { Element } from "./Element";
import { Visitor } from "./Visitor";

export class ConcreteElementA implements Element {
    operationA(): string {
        return "A spezifisches Verhalten";
    }

    accept(visitor: Visitor): void {
        visitor.visitConcreteElementA(this);
    }
}
