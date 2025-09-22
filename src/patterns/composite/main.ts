import { File } from "./Leaf";
import { Directory } from "./Composite";

function runCompositeDemo() {
    // Blätter
    const file1 = new File("readme.txt");
    const file2 = new File("bild.png");
    const file3 = new File("musik.mp3");

    // Verzeichnisse
    const root = new Directory("root");
    const docs = new Directory("dokumente");
    const media = new Directory("medien");

    // Struktur aufbauen
    docs.add(file1);
    media.add(file2);
    media.add(file3);
    root.add(docs);
    root.add(media);

    // Ausgabe
    root.show("");
}

runCompositeDemo();
