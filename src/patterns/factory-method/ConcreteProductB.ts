import { Button } from "./Product";

export class HTMLButton implements Button {
    render(): void {
        console.log("Rendering HTML Product <button>");
    }

    onClick(): void {
        console.log("HTML Product clicked!");
    }
}
