// src/patterns/singleton/main.ts
import { Logger } from "./Logger";

function runSingletonDemo() {
    const logger1 = Logger.getInstance();
    const logger2 = Logger.getInstance();

    logger1.log("Dies ist die erste Nachricht.");
    logger2.log("Und hier die zweite Nachricht.");

    console.log("Sind beide Logger identisch?", logger1 === logger2); // true
}

runSingletonDemo();
