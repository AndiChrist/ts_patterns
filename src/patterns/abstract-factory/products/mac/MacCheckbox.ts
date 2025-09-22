import {Checkbox} from "../../interfaces/Checkbox";

export class MacCheckbox implements Checkbox {
    render() { console.log("Render MacCheckbox"); }
    toggle() { console.log("MacCheckbox toggled"); }
}
