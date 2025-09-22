import { Prototype } from "./Prototype";

export class Person implements Prototype<Person> {
    constructor(
        public name: string,
        public age: number,
        public address: { city: string; street: string }
    ) {}

    clone(): Person {
        // tiefe Kopie für verschachtelte Objekte
        return new Person(
            this.name,
            this.age,
            { ...this.address }
        );
    }

    describe(): void {
        console.log(`${this.name}, ${this.age} Jahre, wohnt in ${this.address.street}, ${this.address.city}`);
    }
}
