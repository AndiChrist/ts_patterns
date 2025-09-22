import {Button} from "../../interfaces/AbstractProductA";

export class WindowsButton implements Button {
    render() { console.log("Render WindowsButton"); }
    onClick() { console.log("WindowsButton clicked"); }
}
