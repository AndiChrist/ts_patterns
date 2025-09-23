import { State } from "./State";

export class Context {
    constructor(private state: State) {}

    setState(state: State): void {
        this.state = state;
    }

    request(): void {
        this.state.handle(this);
    }
}
