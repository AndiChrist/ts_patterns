import { Component } from "./Basisinterface";

export class File implements Component {
    constructor(private name: string) {}

    show(indent: string = ""): void {
        console.log(`${indent}- Datei: ${this.name}`);
    }
}
