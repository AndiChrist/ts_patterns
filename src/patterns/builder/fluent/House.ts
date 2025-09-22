export class House {
    walls: string[];
    roof: string | null;
    garage: boolean;

    constructor(walls: string[], roof: string | null, garage: boolean) {
        this.walls = walls;
        this.roof = roof;
        this.garage = garage;
    }

    describe(): void {
        console.log("Haus mit:");
        console.log("- Wänden:", this.walls.join(", ") || "keine");
        console.log("- Dach:", this.roof ?? "kein");
        console.log("- Garage:", this.garage ? "ja" : "nein");
    }
}
