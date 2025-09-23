import { Mediator } from "./Mediator";
import { Colleague } from "./Colleague";

export class ConcreteMediator implements Mediator {
    private colleagues: Colleague[] = [];

    register(colleague: Colleague): void {
        this.colleagues.push(colleague);
    }

    notify(sender: Colleague, event: string): void {
        for (const colleague of this.colleagues) {
            if (colleague !== sender) {
                colleague.receive(event);
            }
        }
    }
}
