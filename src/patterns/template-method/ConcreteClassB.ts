import { AbstractClass } from "./AbstractClass";

export class ConcreteClassB extends AbstractClass {
    protected requiredOperation1(): void {
        console.log("ConcreteClassB: requiredOperation1");
    }

    protected requiredOperation2(): void {
        console.log("ConcreteClassB: requiredOperation2");
    }

    // kein Hook override → Standardverhalten
}
