// Creator
import { Button } from "./Button"; // Product

export abstract class Dialog {
    // Fabrikmethode
    abstract createButton(): Button;

    render(): void {
        // Verwendung der Fabrikmethode
        const okButton = this.createButton();
        okButton.render();
        okButton.onClick();
    }
}
