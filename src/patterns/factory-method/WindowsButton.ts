// ConcreteProductA
import { Button } from "./Button"; // Product

export class WindowsButton implements Button {
    render(): void {
        console.log("Rendering Windows Button");
    }

    onClick(): void {
        console.log("Windows Button clicked!");
    }
}
