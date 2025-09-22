import { Builder } from "./Builder";
import { House } from "./Product";

export class ConcreteHouseBuilder implements Builder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    reset(): void {
        this.house = new House();
    }

    buildWalls(): void {
        this.house.walls.push("Betonwand", "Holzwand");
    }

    buildRoof(): void {
        this.house.roof = "Ziegeldach";
    }

    buildGarage(): void {
        this.house.garage = true;
    }

    getResult(): House {
        return this.house;
    }
}
