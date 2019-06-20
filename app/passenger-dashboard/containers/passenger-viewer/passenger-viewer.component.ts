import { Component, OnInit } from "@angular/core";
import { IPassenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
  <div>
  <passenger-form [passenger]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
  </div>
  `,
})
export class PassengerViewerComponent implements OnInit {
  public passenger: IPassenger;

  constructor(private passengerDashboardService: PassengerDashboardService) {}

  public ngOnInit() {
    this.passengerDashboardService.getPassenger(1).subscribe((data: IPassenger) => {
      this.passenger = data;
    });
  }

  public onUpdatePassenger(passenger: IPassenger) {
    this.passengerDashboardService.updatePassenger(passenger).subscribe((data: IPassenger) => {
      this.passenger = data;
    });
  }
}
