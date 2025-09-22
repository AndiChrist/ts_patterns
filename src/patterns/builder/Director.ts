import { Builder } from "./Builder";

export class Director {
    private builder: Builder;

    constructor(builder: Builder) {
        this.builder = builder;
    }

    constructSimpleHouse(): void {
        this.builder.reset();
        this.builder.buildWalls();
        this.builder.buildRoof();
    }

    constructLuxuryHouse(): void {
        this.builder.reset();
        this.builder.buildWalls();
        this.builder.buildRoof();
        this.builder.buildGarage();
    }
}
