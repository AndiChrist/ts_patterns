import { DataSource } from "./Component";

export class FileDataSource implements DataSource {
    private storage: string = "";

    writeData(data: string): void {
        console.log(`Speichere in Datei: ${data}`);
        this.storage = data;
    }

    readData(): string {
        console.log(`Lese aus Datei: ${this.storage}`);
        return this.storage;
    }
}
