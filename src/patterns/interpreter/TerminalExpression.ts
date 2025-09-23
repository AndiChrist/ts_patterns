import { Expression } from "./AbstractExpression";
import { Context } from "./Context";

export class TerminalExpression implements Expression {
    constructor(private data: string) {}

    interpret(context: Context): boolean {
        return context.input.includes(this.data);
    }
}
