import { Visitor } from "./Visitor";

export interface Element {
    accept(visitor: Visitor): void;
}
