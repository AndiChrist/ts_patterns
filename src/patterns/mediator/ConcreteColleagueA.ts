import { Colleague } from "./Colleague";

export class ConcreteColleagueA extends Colleague {
    send(event: string): void {
        console.log(`ColleagueA sendet: ${event}`);
        this.mediator.notify(this, event);
    }

    receive(event: string): void {
        console.log(`ColleagueA empfängt: ${event}`);
    }
}
