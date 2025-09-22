import { Target } from "./Target";
import { Adaptee } from "./Adaptee";

// Klassenadapter -> erbt von Adaptee und implementiert Target
export class Adapter extends Adaptee implements Target {
    request(): string {
        return this.specificRequest();
    }
}
