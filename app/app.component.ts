import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public name: string = "Nele";
  public handleClick(username: string) {
    this.name = username;
  }
}
