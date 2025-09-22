import { Dialog } from "./Creator";
import { Button } from "./Product";
import { WindowsButton } from "./ConcreteProductA";

export class WindowsDialog extends Dialog {
    createButton(): Button {
        return new WindowsButton();
    }
}
