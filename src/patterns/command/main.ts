import { Light } from "./Light";
import { LightOnCommand } from "./LightOnCommand";
import { LightOffCommand } from "./LightOffCommand";
import { RemoteControl } from "./RemoteControl";

function runCommandDemo() {
    const light = new Light();
    const lightOn = new LightOnCommand(light);
    const lightOff = new LightOffCommand(light);
    const remote = new RemoteControl();

    console.log("== Lampe einschalten ==");
    remote.executeCommand(lightOn);

    console.log("\n== Lampe ausschalten ==");
    remote.executeCommand(lightOff);

    console.log("\n== Undo letzte Aktion ==");
    remote.undoLast();

    console.log("\n== Undo zweite Aktion ==");
    remote.undoLast();

    console.log("\n== Undo dritte Aktion ==");
    remote.undoLast();
}

runCommandDemo();
