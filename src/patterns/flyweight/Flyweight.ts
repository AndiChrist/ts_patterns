export class Flyweight {
    constructor(private font: string, private size: number) {}

    operation(char: string, position: number): void {
        console.log(
            `Zeichen '${char}' an Position ${position} mit Font=${this.font}, Size=${this.size}`
        );
    }
}
