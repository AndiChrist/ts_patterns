// src/patterns/singleton/EagerSingleton.ts
export class EagerSingleton {
    private static instance: EagerSingleton = new EagerSingleton();

    private constructor() {
        console.log("EagerSingleton: Instanz erzeugt");
    }

    static getInstance(): EagerSingleton {
        return EagerSingleton.instance;
    }

    sayHello() {
        console.log("Hallo aus EagerSingleton!");
    }
}
