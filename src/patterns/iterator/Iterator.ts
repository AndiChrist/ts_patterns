export interface Iterator<T> {
    current(): T | null;
    next(): T | null;
    hasNext(): boolean;
}
