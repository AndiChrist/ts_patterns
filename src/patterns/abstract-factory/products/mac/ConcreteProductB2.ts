import {Checkbox} from "../../interfaces/AbstractProductB";

export class MacCheckbox implements Checkbox {
    render() { console.log("Render MacCheckbox"); }
    toggle() { console.log("MacCheckbox toggled"); }
}
