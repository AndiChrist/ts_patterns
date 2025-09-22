import { FlyweightFactory } from "./FlyweightFactory";
import { Character } from "./Client";

function runFlyweightDemo() {
    const factory = new FlyweightFactory();

    const text = "Hallo Welt";
    const characters: Character[] = [];

    // jedes Zeichen bekommt ein Flyweight für Arial 12
    for (let i = 0; i < text.length; i++) {
        const flyweight = factory.getFlyweight("Arial", 12);
        characters.push(new Character(text[i], i, flyweight));
    }

    // manche Zeichen haben anderen Font
    const fwCourier = factory.getFlyweight("Courier", 14);
    characters.push(new Character("!", 10, fwCourier));

    // Zeichnen
    characters.forEach((c) => c.draw());

    console.log(`\nAnzahl erzeugter Flyweights: ${factory.getCount()}`);
}

runFlyweightDemo();
