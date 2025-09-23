import { Mediator } from "./Mediator";

export abstract class Colleague {
    constructor(protected mediator: Mediator) {}

    abstract send(event: string): void;
    abstract receive(event: string): void;
}
