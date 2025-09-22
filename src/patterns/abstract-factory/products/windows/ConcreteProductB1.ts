import {Checkbox} from "../../interfaces/AbstractProductB";

export class WindowsCheckbox implements Checkbox {
    render() { console.log("Render WindowsCheckbox"); }
    toggle() { console.log("WindowsCheckbox toggled"); }
}
