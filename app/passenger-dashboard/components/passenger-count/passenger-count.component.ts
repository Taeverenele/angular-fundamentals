import { Component, Input } from "@angular/core";

import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-count",
  template: `
    <div>
      <h3>Airline Passengers!</h3>
      <div>
        Total checked in: {{ checkedInCount() }}/{{ items?.length }}
      </div>
    </div>
  `,
})
export class PassengerCountComponent {
  @Input()
  public items: IPassenger[];
  public checkedInCount(): number {
    if (!this.items) { return; }
    return this.items.filter((passenger: IPassenger) => passenger.checkedIn).length;
  }
}
