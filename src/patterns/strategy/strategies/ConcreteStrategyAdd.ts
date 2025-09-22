import { Strategy } from "../interfaces/Strategy";

export class ConcreteStrategyAdd implements Strategy {
    execute(a: number, b: number): number {
        return a + b;
    }
}
