import { ConcreteMediator } from "./ConcreteMediator";
import { ConcreteColleagueA } from "./ConcreteColleagueA";
import { ConcreteColleagueB } from "./ConcreteColleagueB";

function runMediatorDemo() {
    const mediator = new ConcreteMediator();

    const colleagueA = new ConcreteColleagueA(mediator);
    const colleagueB = new ConcreteColleagueB(mediator);

    mediator.register(colleagueA);
    mediator.register(colleagueB);

    console.log("=== Kommunikation starten ===");
    colleagueA.send("Hallo von A");
    colleagueB.send("Hallo von B");
}

runMediatorDemo();
