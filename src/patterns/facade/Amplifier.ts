export class Amplifier {
    on(): void {
        console.log("Verstärker eingeschaltet");
    }

    off(): void {
        console.log("Verstärker ausgeschaltet");
    }

    setVolume(level: number): void {
        console.log(`Verstärker-Lautstärke auf ${level}`);
    }
}
