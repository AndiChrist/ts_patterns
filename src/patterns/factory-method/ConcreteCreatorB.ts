import { Dialog } from "./Creator";
import { Button } from "./Product";
import { HTMLButton } from "./ConcreteProductB";

export class WebDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton();
    }
}
