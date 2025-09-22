import { ConcreteClassA } from "./ConcreteClassA";
import { ConcreteClassB } from "./ConcreteClassB";

function runTemplateMethodDemo() {
    console.log("=== ConcreteClassA ===");
    const a = new ConcreteClassA();
    a.templateMethod();

    console.log("\n=== ConcreteClassB ===");
    const b = new ConcreteClassB();
    b.templateMethod();
}

runTemplateMethodDemo();
