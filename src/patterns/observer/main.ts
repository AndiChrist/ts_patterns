import { ConcreteSubject } from "./ConcreteSubject";
import { ConcreteObserver } from "./ConcreteObserver";

function runObserverDemo() {
    const subject = new ConcreteSubject();

    const observerA = new ConcreteObserver("Observer A");
    const observerB = new ConcreteObserver("Observer B");

    subject.attach(observerA);
    subject.attach(observerB);

    subject.setState("State 1");

    console.log("\nObserver B wird abgemeldet...");
    subject.detach(observerB);

    subject.setState("State 2");
}

runObserverDemo();
