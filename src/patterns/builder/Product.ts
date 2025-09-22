export class House {
    walls: string[] = [];
    roof: string | null = null;
    garage: boolean = false;

    describe(): void {
        console.log("Haus mit:");
        console.log("- Wänden:", this.walls.join(", "));
        console.log("- Dach:", this.roof ?? "kein");
        console.log("- Garage:", this.garage ? "ja" : "nein");
    }
}
