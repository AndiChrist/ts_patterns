import { DataSourceDecorator } from "./BaseDecorator";

export class CompressionDecorator extends DataSourceDecorator {
    writeData(data: string): void {
        const compressed = data.replace(/\s+/g, ""); // sehr einfaches "Komprimieren"
        console.log(`Komprimiere Daten: ${compressed}`);
        super.writeData(compressed);
    }

    readData(): string {
        const data = super.readData();
        // keine echte Rück-Komprimierung möglich, wir lassen es so
        console.log(`Dekomprimiere Daten: ${data}`);
        return data;
    }
}
