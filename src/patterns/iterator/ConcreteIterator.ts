import { Iterator } from "./Iterator";

export class ConcreteIterator<T> implements Iterator<T> {
    private index = 0;

    constructor(private items: T[]) {}

    current(): T | null {
        return this.items[this.index] ?? null;
    }

    next(): T | null {
        this.index++;
        return this.current();
    }

    hasNext(): boolean {
        return this.index < this.items.length;
    }
}