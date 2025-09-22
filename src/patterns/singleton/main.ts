// src/patterns/singleton/main.ts
import { Logger } from "./Logger";
import { LazySingleton } from "./LazySingleton";
import { EagerSingleton } from "./EagerSingleton";

function runSingletonDemo() {
    // Logger is "lazy", too
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    logger1.log("Dies ist die erste Nachricht.");
    logger2.log("Und hier die zweite Nachricht.");

    console.log("Sind beide Logger identisch?", logger1 === logger2); // true

    // eager vs. lazy installation
    console.log("Starte Lazy Singleton Demo:");
    const lazy1 = LazySingleton.getInstance(); // Instanz wird hier erzeugt
    const lazy2 = LazySingleton.getInstance();
    console.log("Lazy identisch?", lazy1 === lazy2);

    console.log("\nStarte Eager Singleton Demo:");
    const eager1 = EagerSingleton.getInstance(); // Instanz schon beim Laden erzeugt
    const eager2 = EagerSingleton.getInstance();
    console.log("Eager identisch?", eager1 === eager2);

}

runSingletonDemo();
