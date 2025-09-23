import { Context } from "./Context";
import { ConcreteStateA } from "./ConcreteStateA";

function runStateDemo() {
    const context = new Context(new ConcreteStateA());

    // drei Requests → State wechselt hin und her
    context.request();
    context.request();
    context.request();
}

runStateDemo();
