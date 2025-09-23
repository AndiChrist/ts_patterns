import { Originator } from "./Originator";
import { Caretaker } from "./Caretaker";

function runMementoDemo() {
    const originator = new Originator();
    const caretaker = new Caretaker();

    originator.setState("Zustand 1");
    caretaker.addMemento(originator.save());

    originator.setState("Zustand 2");
    caretaker.addMemento(originator.save());

    originator.setState("Zustand 3");

    console.log("\n--- Wiederherstellung ---");
    originator.restore(caretaker.getMemento(0)); // zurück zu Zustand 1
    originator.restore(caretaker.getMemento(1)); // zurück zu Zustand 2
}

runMementoDemo();
