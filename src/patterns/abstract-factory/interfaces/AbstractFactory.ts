import {Button} from "./AbstractProductA";
import {Checkbox} from "./AbstractProductB";

export interface UIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}
