import { ConcreteHouseBuilder } from "./ConcreteBuilder";
import { Director } from "./Director";

function runBuilderDemo() {
    const builder = new ConcreteHouseBuilder();
    const director = new Director(builder);

    console.log("Einfaches Haus:");
    director.constructSimpleHouse();
    builder.getResult().describe();

    console.log("\nLuxus-Haus:");
    director.constructLuxuryHouse();
    builder.getResult().describe();
}

runBuilderDemo();
