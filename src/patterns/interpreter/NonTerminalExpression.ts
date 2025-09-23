import { Expression } from "./AbstractExpression";
import { Context } from "./Context";

// Beispiel: ODER-Ausdruck
export class OrExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: Context): boolean {
        return this.expr1.interpret(context) || this.expr2.interpret(context);
    }
}

// Beispiel: UND-Ausdruck
export class AndExpression implements Expression {
    constructor(private expr1: Expression, private expr2: Expression) {}

    interpret(context: Context): boolean {
        return this.expr1.interpret(context) && this.expr2.interpret(context);
    }
}
