import { Device } from "./Implementor";

export class TV implements Device {
    private on = false;
    private volume = 20;

    isEnabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
        console.log("TV eingeschaltet");
    }

    disable(): void {
        this.on = false;
        console.log("TV ausgeschaltet");
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = Math.max(0, Math.min(100, percent));
        console.log(`TV Lautstärke: ${this.volume}`);
    }
}
