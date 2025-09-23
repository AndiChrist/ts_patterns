import { Context } from "./Context";
import { TerminalExpression } from "./TerminalExpression";
import { OrExpression, AndExpression } from "./NonTerminalExpression";

function runInterpreterDemo() {
    const context1 = new Context("Ich bin ein JavaScript Entwickler");
    const context2 = new Context("Ich programmiere in TypeScript");

    const js = new TerminalExpression("JavaScript");
    const ts = new TerminalExpression("TypeScript");

    const jsOrTs = new OrExpression(js, ts);
    const jsAndTs = new AndExpression(js, ts);

    console.log(`Text1 enthält JavaScript oder TypeScript? ${jsOrTs.interpret(context1)}`);
    console.log(`Text1 enthält beide? ${jsAndTs.interpret(context1)}`);

    console.log(`Text2 enthält JavaScript oder TypeScript? ${jsOrTs.interpret(context2)}`);
    console.log(`Text2 enthält beide? ${jsAndTs.interpret(context2)}`);
}

runInterpreterDemo();
