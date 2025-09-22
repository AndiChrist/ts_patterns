import { FileDataSource } from "./ConcreteComponent";
import { EncryptionDecorator } from "./ConcreteDecoratorA";
import { CompressionDecorator } from "./ConcreteDecoratorB";

function runDecoratorDemo() {
    const rawData = "Hallo Welt mit vielen Leerzeichen   !";

    console.log("== Ohne Dekorierer ==");
    const simpleSource = new FileDataSource();
    simpleSource.writeData(rawData);
    simpleSource.readData();

    console.log("\n== Mit Verschlüsselung ==");
    const encrypted = new EncryptionDecorator(new FileDataSource());
    encrypted.writeData(rawData);
    encrypted.readData();

    console.log("\n== Mit Kompression + Verschlüsselung ==");
    const compressedEncrypted = new EncryptionDecorator(
        new CompressionDecorator(new FileDataSource())
    );
    compressedEncrypted.writeData(rawData);
    compressedEncrypted.readData();
}

runDecoratorDemo();
