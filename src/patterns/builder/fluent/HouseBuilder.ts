import { House } from "./House";

export class HouseBuilder {
    private walls: string[] = [];
    private roof: string | null = null;
    private garage: boolean = false;

    addWall(wall: string): HouseBuilder {
        this.walls.push(wall);
        return this;
    }

    setRoof(roof: string): HouseBuilder {
        this.roof = roof;
        return this;
    }

    addGarage(): HouseBuilder {
        this.garage = true;
        return this;
    }

    build(): House {
        return new House(this.walls, this.roof, this.garage);
    }
}
