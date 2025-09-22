import { Subject } from "./Subject";

export class RealSubject implements Subject {
    request(): void {
        console.log("RealSubject: teure oder echte Operation ausgeführt.");
    }
}
