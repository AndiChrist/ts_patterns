import { Amplifier } from "./Amplifier";
import { DVDPlayer } from "./DVDPlayer";
import { Projector } from "./Projector";
import { HomeTheaterFacade } from "./HomeTheaterFacade";

function runFacadeDemo() {
    const amp = new Amplifier();
    const dvd = new DVDPlayer();
    const projector = new Projector();

    const homeTheater = new HomeTheaterFacade(amp, dvd, projector);

    homeTheater.watchMovie("Inception");
    console.log("");
    homeTheater.endMovie();
}

runFacadeDemo();
