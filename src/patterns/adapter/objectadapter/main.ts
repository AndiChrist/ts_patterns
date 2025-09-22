import { Target } from "./Target";
import { Adapter } from "./Adapter";
import { Adaptee } from "./Adaptee";

function runObjectAdapterDemo() {
    const adaptee = new Adaptee();
    const target: Target = new Adapter(adaptee);

    console.log("Client arbeitet mit Adapter (Objekt-Variante):");
    console.log(target.request());
}

runObjectAdapterDemo();
