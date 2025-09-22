import { Flyweight } from "./Flyweight";

export class Character {
    constructor(
        private char: string,
        private position: number,
        private flyweight: Flyweight
    ) {}

    draw(): void {
        this.flyweight.operation(this.char, this.position);
    }
}
