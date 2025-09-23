import { Visitor } from "./Visitor";
import { ConcreteElementA } from "./ConcreteElementA";
import { ConcreteElementB } from "./ConcreteElementB";

export class ConcreteVisitor2 implements Visitor {
    visitConcreteElementA(element: ConcreteElementA): void {
        console.log(`Visitor2 macht etwas anderes mit A`);
    }

    visitConcreteElementB(element: ConcreteElementB): void {
        console.log(`Visitor2 macht etwas anderes mit B`);
    }
}
