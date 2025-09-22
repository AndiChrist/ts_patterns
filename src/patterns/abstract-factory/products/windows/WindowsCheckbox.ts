import {Checkbox} from "../../interfaces/Checkbox";

export class WindowsCheckbox implements Checkbox {
    render() { console.log("Render WindowsCheckbox"); }
    toggle() { console.log("WindowsCheckbox toggled"); }
}
