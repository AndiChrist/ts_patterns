import { HouseBuilder } from "./HouseBuilder";

function runFluentBuilderDemo() {
    console.log("Einfaches Haus:");
    const simpleHouse = new HouseBuilder()
        .addWall("Betonwand")
        .addWall("Holzwand")
        .setRoof("Ziegeldach")
        .build();
    simpleHouse.describe();

    console.log("\nLuxus-Haus:");
    const luxuryHouse = new HouseBuilder()
        .addWall("Betonwand")
        .addWall("Glaswand")
        .setRoof("Solardach")
        .addGarage()
        .build();
    luxuryHouse.describe();
}

runFluentBuilderDemo();
