import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public name: string = "Nele";
  public handleClick() {
    this.name = "Taevere";
  }
  public handleChange(value: string) {
    this.name = value;
  }
}
