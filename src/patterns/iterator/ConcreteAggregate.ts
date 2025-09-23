import { Aggregate } from "./Aggregate";
import { Iterator } from "./Iterator";
import { ConcreteIterator } from "./ConcreteIterator";

export class ConcreteAggregate<T> implements Aggregate<T> {
    constructor(private items: T[]) {}

    createIterator(): Iterator<T> {
        return new ConcreteIterator(this.items);
    }
}
