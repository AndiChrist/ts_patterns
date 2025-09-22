import { Context } from "./Context";
import { ConcreteStrategyAdd } from "./strategies/ConcreteStrategyAdd";
import { ConcreteStrategyMultiply } from "./strategies/ConcreteStrategyMultiply";

function runStrategyDemo() {
    const context = new Context(new ConcreteStrategyAdd());

    console.log("Using Add Strategy: 5 + 10 =", context.executeStrategy(5, 10));

    context.setStrategy(new ConcreteStrategyMultiply());
    console.log("Using Multiply Strategy: 5 * 10 =", context.executeStrategy(5, 10));
}

runStrategyDemo();
