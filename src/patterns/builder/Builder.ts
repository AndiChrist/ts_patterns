import { House } from "./Product";

export interface Builder {
    reset(): void;
    buildWalls(): void;
    buildRoof(): void;
    buildGarage(): void;
    getResult(): House;
}
