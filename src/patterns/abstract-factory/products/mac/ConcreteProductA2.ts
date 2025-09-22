import {Button} from "../../interfaces/AbstractProductA";

export class MacButton implements Button {
    render() { console.log("Render MacButton"); }
    onClick() { console.log("MacButton clicked"); }
}
