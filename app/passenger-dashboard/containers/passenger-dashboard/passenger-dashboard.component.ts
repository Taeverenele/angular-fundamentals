import { Component, OnInit } from "@angular/core";

import { IPassenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-dashboard",
  styleUrls: ["passenger-dashboard.component.scss"],
  template: `
    <div>
      <passenger-count
        [items]="passengers">
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `,
})
export class PassengerDashboardComponent implements OnInit {

  public passengers: IPassenger[];

  constructor(
    private passengerDashboardService: PassengerDashboardService,
  ) {}

  public ngOnInit() {
    this.passengerDashboardService.getPassengers().then((data: IPassenger[]) => this.passengers = data);
  }

  public handleEdit(event: IPassenger) {
    this.passengerDashboardService.updatePassenger(event).subscribe(
      (data: IPassenger) => {
        this.passengers = this.passengers.map((passenger: IPassenger) => {
          if (passenger.id === event.id) {
            passenger = Object.assign({}, passenger, event);
          }
          return passenger;
        });
      },
      (err) => console.error("Error in updatePassenger", err),
      );
  }

  public handleRemove(event: IPassenger) {
    this.passengerDashboardService.removePassenger(event).subscribe((data: IPassenger) => {
      this.passengers = this.passengers.filter((passenger: IPassenger) => {
        return passenger.id !== event.id;
      });
    },
    (err) => console.error("Error in removePassenger", err),
    );
  }
}
