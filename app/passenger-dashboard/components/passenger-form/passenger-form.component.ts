import { Component, Input } from "@angular/core";
import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form>
      Form!
      {{ passenger | json }}
    </form>
  `,
})
export class PassengerFormComponent {
  @Input() public passenger: IPassenger;
}
