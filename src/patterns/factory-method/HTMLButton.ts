// ConcreteProductB
import { Button } from "./Button"; // Product

export class HTMLButton implements Button {
    render(): void {
        console.log("Rendering HTML Button <button>");
    }

    onClick(): void {
        console.log("HTML Button clicked!");
    }
}
