import { ConcreteHandlerA } from "./ConcreteHandlerA";
import { ConcreteHandlerB } from "./ConcreteHandlerB";

function runChainDemo() {
    const handlerA = new ConcreteHandlerA();
    const handlerB = new ConcreteHandlerB();

    handlerA.setNext(handlerB);

    const requests = ["A", "B", "C"];

    for (const req of requests) {
        console.log(`\nAnfrage: ${req}`);
        handlerA.handle(req);
    }
}

runChainDemo();
