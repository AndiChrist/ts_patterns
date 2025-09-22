import { Target } from "./Target";
import { Adapter } from "./Adapter";

function runAdapterDemo() {
    const target: Target = new Adapter();
    console.log("Client kann jetzt arbeiten mit Adapter:");
    console.log(target.request());
}

runAdapterDemo();
