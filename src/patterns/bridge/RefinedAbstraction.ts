import { Remote } from "./Abstraction";
import { Device } from "./Implementor";

export class AdvancedRemote extends Remote {
    constructor(device: Device) {
        super(device);
    }

    mute(): void {
        this.device.setVolume(0);
        console.log("Stumm geschaltet");
    }
}
