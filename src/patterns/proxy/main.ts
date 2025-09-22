import { Proxy } from "./Proxy";

function runProxyDemo() {
    const proxy = new Proxy();

    console.log("== Erster Aufruf ==");
    proxy.request();

    console.log("\n== Zweiter Aufruf ==");
    proxy.request();
}

runProxyDemo();
