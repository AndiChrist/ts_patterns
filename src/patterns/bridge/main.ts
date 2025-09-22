import { TV } from "./ConcreteImplementorB";
import { Radio } from "./ConcreteImplementorA";
import { Remote } from "./Abstraction";
import { AdvancedRemote } from "./RefinedAbstraction";

function runBridgeDemo() {
    console.log("== TV mit normaler Fernbedienung ==");
    const tv = new TV();
    const remote = new Remote(tv);
    remote.togglePower();
    remote.volumeUp();
    remote.volumeUp();
    remote.togglePower();

    console.log("\n== Radio mit erweiterter Fernbedienung ==");
    const radio = new Radio();
    const advancedRemote = new AdvancedRemote(radio);
    advancedRemote.togglePower();
    advancedRemote.volumeDown();
    advancedRemote.mute();
}

runBridgeDemo();
