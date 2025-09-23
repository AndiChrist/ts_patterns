import { ConcreteElementA } from "./ConcreteElementA";
import { ConcreteElementB } from "./ConcreteElementB";
import { ConcreteVisitor1 } from "./ConcreteVisitor1";
import { ConcreteVisitor2 } from "./ConcreteVisitor2";

function runVisitorDemo() {
    const elements = [new ConcreteElementA(), new ConcreteElementB()];

    const visitor1 = new ConcreteVisitor1();
    const visitor2 = new ConcreteVisitor2();

    console.log("=== Visitor1 ===");
    for (const element of elements) {
        element.accept(visitor1);
    }

    console.log("\n=== Visitor2 ===");
    for (const element of elements) {
        element.accept(visitor2);
    }
}

runVisitorDemo();
