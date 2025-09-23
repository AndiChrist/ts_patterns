import { ConcreteAggregate } from "./ConcreteAggregate";

function runIteratorDemo() {
    const aggregate = new ConcreteAggregate<number>([1, 2, 3, 4, 5]);
    const iterator = aggregate.createIterator();

    console.log("Iteriere über die Elemente:");
    while (iterator.hasNext()) {
        console.log(iterator.current());
        iterator.next();
    }
}

runIteratorDemo();
