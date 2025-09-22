import { Subject } from "./Subject";
import { RealSubject } from "./RealSubject";

export class Proxy implements Subject {
    private realSubject: RealSubject | null = null;

    request(): void {
        console.log("Proxy: Zugriffskontrolle & Lazy Initialization.");

        if (!this.realSubject) {
            console.log("Proxy: Erzeuge RealSubject (nur bei Bedarf).");
            this.realSubject = new RealSubject();
        }

        // Zusatzfunktionalität (z. B. Logging)
        console.log("Proxy: Vor dem Request Logging");
        this.realSubject.request();
        console.log("Proxy: Nach dem Request Logging");
    }
}
