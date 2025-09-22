import {UIFactory} from "./interfaces/AbstractFactory";
import {WindowsFactory} from "./factories/ConcreteFactory1";
import {MacFactory} from "./factories/ConcreteFactory2";
import {Application} from "./Application";

// Beispiel: Factory zur Laufzeit wählen
function bootstrap(os: "windows" | "mac") {
    let factory: UIFactory;
    if (os === "windows") {
        factory = new WindowsFactory();
    } else {
        factory = new MacFactory();
    }

    const app = new Application(factory);
    app.renderUI();
    app.simulateUserActions();
}

// Testlauf
bootstrap("windows");
/* Konsolenausgabe:
Render WindowsButton
Render WindowsCheckbox
WindowsButton clicked
WindowsCheckbox toggled
*/

bootstrap("mac");
/* Konsolenausgabe:
Render MacButton
Render MacCheckbox
MacButton clicked
MacCheckbox toggled
*/

