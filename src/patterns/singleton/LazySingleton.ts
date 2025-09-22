// src/patterns/singleton/LazySingleton.ts
export class LazySingleton {
    private static instance: LazySingleton;

    private constructor() {
        console.log("LazySingleton: Instanz erzeugt");
    }

    static getInstance(): LazySingleton {
        if (!LazySingleton.instance) {
            LazySingleton.instance = new LazySingleton();
        }
        return LazySingleton.instance;
    }

    sayHello() {
        console.log("Hallo aus LazySingleton!");
    }
}
