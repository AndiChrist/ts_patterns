import { Flyweight } from "./Flyweight";

export class FlyweightFactory {
    private cache: Map<string, Flyweight> = new Map();

    getFlyweight(font: string, size: number): Flyweight {
        const key = `${font}_${size}`;
        if (!this.cache.has(key)) {
            console.log(`Erzeuge neues Flyweight für: ${key}`);
            this.cache.set(key, new Flyweight(font, size));
        }
        return this.cache.get(key)!;
    }

    getCount(): number {
        return this.cache.size;
    }
}
