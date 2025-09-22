// ConcreteCreatorB
import { Dialog } from "./Dialog"; // Creator
import { Button } from "./Button"; // Product
import { HTMLButton } from "./HTMLButton"; // ConcreteProductB

export class WebDialog extends Dialog {
    createButton(): Button {
        return new HTMLButton();
    }
}
