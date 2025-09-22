import { Handler } from "./Handler";

export class ConcreteHandlerB extends Handler {
    handle(request: string): void {
        if (request === "B") {
            console.log("ConcreteHandlerB bearbeitet Anfrage B");
        } else {
            super.handle(request); // weitergeben
        }
    }
}
