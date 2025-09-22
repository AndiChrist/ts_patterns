import { Dialog } from "./Dialog"; // Creator
import { WindowsDialog } from "./WindowsDialog"; // ConcreteCreatorA
import { WebDialog } from "./WebDialog"; // ConcreteCreatorB

function runFactoryMethodDemo() {
    let dialog: Dialog;

    console.log("Starte Windows Dialog:");
    dialog = new WindowsDialog();
    dialog.render();

    console.log("\nStarte Web Dialog:");
    dialog = new WebDialog();
    dialog.render();
}

runFactoryMethodDemo();
