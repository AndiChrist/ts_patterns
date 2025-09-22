// src/patterns/singleton/Logger.ts
export class Logger {
    private static instance: Logger;

    // privater Konstruktor verhindert `new Logger()` von außen
    private constructor() {}

    static getInstance(): Logger {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    }

    log(message: string): void {
        console.log(`[LOG] ${message}`);
    }
}
