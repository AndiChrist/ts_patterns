export class DVDPlayer {
    on(): void {
        console.log("DVD-Player eingeschaltet");
    }

    off(): void {
        console.log("DVD-Player ausgeschaltet");
    }

    play(movie: string): void {
        console.log(`Spiele Film: ${movie}`);
    }

    stop(): void {
        console.log("Film gestoppt");
    }
}
