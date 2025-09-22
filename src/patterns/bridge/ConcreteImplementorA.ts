import { Device } from "./Implementor";

export class Radio implements Device {
    private on = false;
    private volume = 30;

    isEnabled(): boolean {
        return this.on;
    }

    enable(): void {
        this.on = true;
        console.log("Radio eingeschaltet");
    }

    disable(): void {
        this.on = false;
        console.log("Radio ausgeschaltet");
    }

    getVolume(): number {
        return this.volume;
    }

    setVolume(percent: number): void {
        this.volume = Math.max(0, Math.min(100, percent));
        console.log(`Radio Lautstärke: ${this.volume}`);
    }
}
