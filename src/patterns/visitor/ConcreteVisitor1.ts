import { Visitor } from "./Visitor";
import { ConcreteElementA } from "./ConcreteElementA";
import { ConcreteElementB } from "./ConcreteElementB";

export class ConcreteVisitor1 implements Visitor {
    visitConcreteElementA(element: ConcreteElementA): void {
        console.log(`Visitor1 bearbeitet: ${element.operationA()}`);
    }

    visitConcreteElementB(element: ConcreteElementB): void {
        console.log(`Visitor1 bearbeitet: ${element.operationB()}`);
    }
}
