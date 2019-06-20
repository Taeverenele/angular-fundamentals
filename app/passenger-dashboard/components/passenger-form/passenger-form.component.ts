import { Component, Input } from "@angular/core";
import { IBaggage } from "../../models/baggage.interface";
import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-form",
  styleUrls: ["passenger-form.component.scss"],
  template: `
    <form #form="ngForm" novalidate>
    {{ passenger | json }}
    <div>
      Passenger name:
      <input type="text" name="fullname" #fullname="ngModel" [ngModel]="passenger?.fullname" required/>
      {{fullname.errors | json}}
      <div *ngIf="fullname.errors?.required && fullname.dirty" class="error">
        Passenger name is required
      </div>
    </div>
    <div>
      Passenger ID:
      <input type="number" name="id" #id="ngModel" [ngModel]="passenger?.id" required/>
      <div *ngIf="id.errors?.required && id.dirty" class="error">
        Passenger id is required
      </div>
    </div>
    <div>
      <label>
        <input type="checkbox" name="checkedIn" [ngModel]="detail?.checkedIn" [ngModel]="passenger?.checkedIn" (ngModelChange)="checkInPassenger($event)"/>
        Checked in
      </label>
    </div>

    <div *ngIf="form.value.checkedIn">
      Check in date:
      <input type="number" name="checkInDate" [ngModel]="passenger?.checkInDate" />
    </div>

    <div>
    Luggage
    <select name="baggage" [ngModel]="passenger?.baggage">
      <option *ngFor="let opt of baggageOptions" [value]="opt.key" [selected]="opt.key === passenger?.baggage">{{opt.value}}</option>
    </select>
    </div>
    <button type="submit" [disabled]="form.invalid">Update passenger</button>
    </form>
  `,
})
export class PassengerFormComponent {
  @Input() public passenger: IPassenger;

  public baggageOptions: IBaggage[] = [
    {
      key: "none",
      value: "No baggage",
    },
    {
      key: "hand-only",
      value: "Hand baggage",
    },
    {
      key: "hold-only",
      value: "Hold baggage",
    },
    {
      key: "hand-hold",
      value: "Hand and hold baggage",
    },
  ];

  public checkInPassenger() {
    this.passenger.checkInDate = Date.now();
  }
}
