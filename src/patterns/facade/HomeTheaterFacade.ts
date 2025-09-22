import { Amplifier } from "./Amplifier";
import { DVDPlayer } from "./DVDPlayer";
import { Projector } from "./Projector";

export class HomeTheaterFacade {
    constructor(
        private amp: Amplifier,
        private dvd: DVDPlayer,
        private projector: Projector
    ) {}

    watchMovie(movie: string): void {
        console.log("=== Film starten ===");
        this.amp.on();
        this.amp.setVolume(5);
        this.projector.on();
        this.projector.wideScreenMode();
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie(): void {
        console.log("=== Film beenden ===");
        this.dvd.stop();
        this.dvd.off();
        this.projector.off();
        this.amp.off();
    }
}
