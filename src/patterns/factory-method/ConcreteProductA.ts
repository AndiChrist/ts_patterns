import { Button } from "./Product";

export class WindowsButton implements Button {
    render(): void {
        console.log("Rendering Windows Product");
    }

    onClick(): void {
        console.log("Windows Product clicked!");
    }
}
