export abstract class AbstractClass {
    // Template Method
    templateMethod(): void {
        this.baseOperation1();
        this.requiredOperation1();
        this.hook();
        this.baseOperation2();
        this.requiredOperation2();
    }

    // Basisoperationen, die fix sind
    protected baseOperation1(): void {
        console.log("AbstractClass: Basisoperation1");
    }

    protected baseOperation2(): void {
        console.log("AbstractClass: Basisoperation2");
    }

    // Operationen, die von Unterklassen implementiert werden müssen
    protected abstract requiredOperation1(): void;
    protected abstract requiredOperation2(): void;

    // Hook (optional für Unterklassen)
    protected hook(): void {}
}
