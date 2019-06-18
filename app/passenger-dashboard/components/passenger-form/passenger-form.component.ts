import { Component, Input } from "@angular/core";
import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
    {{ passenger | json }}
    <div>
      Passenger name:
      <input type="text" name="fullname" [ngModel]="passenger?.fullname"/>
    </div>
    <div>
      Passenger ID:
      <input type="number" name="id" [ngModel]="passenger?.id"/>
    </div>
    <div>
      <label>
        <input type="radio" [value]="true" name="checkedIn" [ngModel]="passenger?.checkedIn" (ngModelChange)="checkInPassenger()"/>
        Yes
      </label>
      <label>
        <input type="radio" [value]="false" name="checkedIn" [ngModel]="passenger?.checkedIn"/>
        No
      </label>
    </div>

    <div *ngIf="form.value.checkedIn">
      Check in date:
      <input type="number" name="checkInDate" [ngModel]="passenger?.checkInDate" />
    </div>
    {{ form.value | json }}
    </form>
  `,
})
export class PassengerFormComponent {
  @Input() public passenger: IPassenger;

  checkInPassenger() {
    this.passenger.checkInDate = Date.now();
  }
}
