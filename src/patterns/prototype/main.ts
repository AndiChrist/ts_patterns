import { Person } from "./ConcretePrototype";

function runPrototypeDemo() {
    const original = new Person("Alice", 30, { city: "Berlin", street: "Alexanderplatz 1" });
    console.log("Original:");
    original.describe();

    // Klonen
    const copy = original.clone();
    copy.name = "Bob";
    copy.address.city = "Hamburg";

    console.log("\nKopie:");
    copy.describe();

    console.log("\nOriginal nach Änderung der Kopie:");
    original.describe();
}

runPrototypeDemo();
