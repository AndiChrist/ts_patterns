import {UIFactory} from "../interfaces/AbstractFactory";
import {WindowsButton} from "../products/windows/ConcreteProductA1";
import {Button} from "../interfaces/AbstractProductA";
import {Checkbox} from "../interfaces/AbstractProductB";
import {WindowsCheckbox} from "../products/windows/ConcreteProductB1";

export class WindowsFactory implements UIFactory {
    createButton(): Button { return new WindowsButton(); }
    createCheckbox(): Checkbox { return new WindowsCheckbox(); }
}
