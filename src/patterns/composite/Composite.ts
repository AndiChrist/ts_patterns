import { Component } from "./Basisinterface";

export class Directory implements Component {
    private children: Component[] = [];

    constructor(private name: string) {}

    add(child: Component): void {
        this.children.push(child);
    }

    show(indent: string = ""): void {
        console.log(`${indent}+ Ordner: ${this.name}`);
        for (const child of this.children) {
            child.show(indent + "  ");
        }
    }
}
