// ConcreteCreatorA
import { Dialog } from "./Dialog"; // Creator
import { Button } from "./Button"; // Product
import { WindowsButton } from "./WindowsButton"; // ConcreteProductA

export class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}
