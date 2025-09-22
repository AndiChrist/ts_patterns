import {Button} from "../interfaces/AbstractProductA";
import {Checkbox} from "../interfaces/AbstractProductB";
import {UIFactory} from "../interfaces/AbstractFactory";
import {MacButton} from "../products/mac/ConcreteProductA2";
import {MacCheckbox} from "../products/mac/ConcreteProductB2";

export class MacFactory implements UIFactory {
    createButton(): Button { return new MacButton(); }
    createCheckbox(): Checkbox { return new MacCheckbox(); }
}
