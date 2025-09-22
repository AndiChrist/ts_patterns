import {Button} from "../interfaces/Button";
import {Checkbox} from "../interfaces/Checkbox";
import {UIFactory} from "../interfaces/UIFactory";
import {MacButton} from "../products/mac/MacButton";
import {MacCheckbox} from "../products/mac/MacCheckbox";

export class MacFactory implements UIFactory {
    createButton(): Button { return new MacButton(); }
    createCheckbox(): Checkbox { return new MacCheckbox(); }
}
