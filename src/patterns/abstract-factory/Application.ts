import { Button } from "./interfaces/Button";
import { Checkbox } from "./interfaces/Checkbox";
import {UIFactory} from "./interfaces/UIFactory";

// Client: benutzt nur die abstrakten Interfaces
export class Application {
  private button: Button;
  private checkbox: Checkbox;

  // Die Factory wird hereingereicht (Dependency Injection)
  constructor(factory: UIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  public renderUI() {
    this.button.render();
    this.checkbox.render();
  }

  public simulateUserActions() {
    this.button.onClick();
    this.checkbox.toggle();
  }
}
