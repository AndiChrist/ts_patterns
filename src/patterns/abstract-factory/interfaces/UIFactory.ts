import {Button} from "./Button";
import {Checkbox} from "./Checkbox";

export interface UIFactory {
    createButton(): Button;
    createCheckbox(): Checkbox;
}
