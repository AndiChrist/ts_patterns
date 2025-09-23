import { State } from "./State";
import { Context } from "./Context";
import { ConcreteStateA } from "./ConcreteStateA";

export class ConcreteStateB implements State {
    handle(context: Context): void {
        console.log("Zustand B: handle → Wechsel zu Zustand A");
        context.setState(new ConcreteStateA());
    }
}
