import {UIFactory} from "../interfaces/UIFactory";
import {WindowsButton} from "../products/windows/WindowsButton";
import {Button} from "../interfaces/Button";
import {Checkbox} from "../interfaces/Checkbox";
import {WindowsCheckbox} from "../products/windows/WindowsCheckbox";

export class WindowsFactory implements UIFactory {
    createButton(): Button { return new WindowsButton(); }
    createCheckbox(): Checkbox { return new WindowsCheckbox(); }
}
