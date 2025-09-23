import { Colleague } from "./Colleague";

export class ConcreteColleagueB extends Colleague {
    send(event: string): void {
        console.log(`ColleagueB sendet: ${event}`);
        this.mediator.notify(this, event);
    }

    receive(event: string): void {
        console.log(`ColleagueB empfängt: ${event}`);
    }
}
