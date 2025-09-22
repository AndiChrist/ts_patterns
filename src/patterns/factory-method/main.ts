import { Dialog } from "./Creator";
import { WindowsDialog } from "./ConcreteCreatorA";
import { WebDialog } from "./ConcreteCreatorB";

function runFactoryMethodDemo() {
    let dialog: Dialog;

    console.log("Starte Windows Creator:");
    dialog = new WindowsDialog();
    dialog.render();

    console.log("\nStarte Web Creator:");
    dialog = new WebDialog();
    dialog.render();
}

runFactoryMethodDemo();
