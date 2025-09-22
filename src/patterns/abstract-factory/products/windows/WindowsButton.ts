import {Button} from "../../interfaces/Button";

export class WindowsButton implements Button {
    render() { console.log("Render WindowsButton"); }
    onClick() { console.log("WindowsButton clicked"); }
}
