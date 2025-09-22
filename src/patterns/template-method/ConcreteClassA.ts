import { AbstractClass } from "./AbstractClass";

export class ConcreteClassA extends AbstractClass {
    protected requiredOperation1(): void {
        console.log("ConcreteClassA: requiredOperation1");
    }

    protected requiredOperation2(): void {
        console.log("ConcreteClassA: requiredOperation2");
    }

    protected hook(): void {
        console.log("ConcreteClassA: hook (optional)");
    }
}
