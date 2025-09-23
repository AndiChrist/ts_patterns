# GoF Design Patterns Cheatsheet

## 1. Erzeugungsmuster (Creational Patterns)

| Muster           | Zweck                                                             | Beispiel                               |
| ---------------- | ----------------------------------------------------------------- | -------------------------------------- |
| Singleton        | Nur eine Instanz einer Klasse                                     | EagerSingleton, LazySingleton          |
| Factory Method   | Schnittstelle zum Erzeugen von Objekten, Unterklassen entscheiden | Dialog -> WindowsDialog, WebDialog     |
| Abstract Factory | Erzeugt Familien verwandter Objekte                               | GUIFactory -> WindowsButton, MacButton |
| Builder          | Trennt Konstruktion und Darstellung                               | CarBuilder, CarDirector                |
| Prototype        | Erzeugt Objekte durch Kopieren                                    | Prototype.clone()                      |

## 2. Strukturmuster (Structural Patterns)

| Muster    | Zweck                                        | Beispiel               |
| --------- | -------------------------------------------- | ---------------------- |
| Adapter   | Passt eine bestehende Schnittstelle an       | Adapter für Adaptee    |
| Bridge    | Trennt Abstraktion und Implementierung       | RemoteControl + Device |
| Composite | Objekte und Kompositionen gleich behandeln   | File, Directory        |
| Decorator | Fügt Objekten dynamisch Funktionalität hinzu | Coffee + MilkDecorator |
| Facade    | Vereinfachte Schnittstelle zu Subsystemen    | ComputerFacade         |
| Flyweight | Gemeinsame Instanzen zur Speicherersparnis   | CircleFactory          |
| Proxy     | Stellvertreter für Zugriff, Lazy Loading     | RealSubject, Proxy     |

## 3. Verhaltensmuster (Behavioral Patterns)

| Muster                  | Zweck                                                    | Beispiel                          |
| ----------------------- | -------------------------------------------------------- | --------------------------------- |
| Chain of Responsibility | Übergibt Anfragen entlang einer Kette                    | HandlerA -> HandlerB              |
| Command                 | Kapselt Befehle als Objekte                              | LightOnCommand, RemoteControl     |
| Interpreter             | Definiert Grammatik und interpretiert                    | OrExpression, AndExpression       |
| Iterator                | Zugriff auf Sammlung ohne interne Struktur offenzulegen  | NumberIterator                    |
| Mediator                | Kapselt Kommunikation zwischen Objekten                  | ChatRoom                          |
| Memento                 | Speichert und stellt Zustand wieder her                  | Originator, Caretaker             |
| Observer                | Benachrichtigt Abonnenten bei Zustandsänderung           | ConcreteSubject, ConcreteObserver |
| State                   | Ändert Verhalten bei Zustandsänderung                    | ConcreteStateA, ConcreteStateB    |
| Strategy                | Kapselt austauschbare Algorithmen                        | AddStrategy, MultiplyStrategy     |
| Template Method         | Algorithmus-Skelett, Unterklassen implementieren Details | AbstractClass, ConcreteClassA/B   |
| Visitor                 | Trennt Algorithmen von Objektstruktur                    | Visitor1, Visitor2                |

## Lern-Tipps

* Creational: Wie werden Objekte erzeugt?
* Structural: Wie hängen Objekte zusammen?
* Behavioral: Wie arbeiten Objekte zusammen?
