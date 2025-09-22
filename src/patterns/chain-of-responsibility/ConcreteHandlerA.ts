import { Handler } from "./Handler";

export class ConcreteHandlerA extends Handler {
    handle(request: string): void {
        if (request === "A") {
            console.log("ConcreteHandlerA bearbeitet Anfrage A");
        } else {
            super.handle(request); // weitergeben
        }
    }
}
