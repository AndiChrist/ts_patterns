export abstract class Handler {
    protected nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler; // ermöglicht fluent chaining
    }

    handle(request: string): void {
        if (this.nextHandler) {
            this.nextHandler.handle(request);
        } else {
            console.log(`Keine Bearbeitung für: ${request}`);
        }
    }
}
