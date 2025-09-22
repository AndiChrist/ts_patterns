import {Button} from "../../interfaces/Button";

export class MacButton implements Button {
    render() { console.log("Render MacButton"); }
    onClick() { console.log("MacButton clicked"); }
}
