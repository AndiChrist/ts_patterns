import { DataSourceDecorator } from "./BaseDecorator";

export class EncryptionDecorator extends DataSourceDecorator {
    writeData(data: string): void {
        const encrypted = Buffer.from(data).toString("base64");
        console.log(`Verschlüssele Daten: ${encrypted}`);
        super.writeData(encrypted);
    }

    readData(): string {
        const data = super.readData();
        const decrypted = Buffer.from(data, "base64").toString("utf-8");
        console.log(`Entschlüssele Daten: ${decrypted}`);
        return decrypted;
    }
}
