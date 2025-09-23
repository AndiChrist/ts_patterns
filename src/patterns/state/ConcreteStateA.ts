import { State } from "./State";
import { Context } from "./Context";
import { ConcreteStateB } from "./ConcreteStateB";

export class ConcreteStateA implements State {
    handle(context: Context): void {
        console.log("Zustand A: handle → Wechsel zu Zustand B");
        context.setState(new ConcreteStateB());
    }
}
