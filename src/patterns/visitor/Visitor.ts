import { ConcreteElementA } from "./ConcreteElementA";
import { ConcreteElementB } from "./ConcreteElementB";

export interface Visitor {
    visitConcreteElementA(element: ConcreteElementA): void;
    visitConcreteElementB(element: ConcreteElementB): void;
}
