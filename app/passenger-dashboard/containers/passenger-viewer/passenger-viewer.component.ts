import { Component, OnInit } from "@angular/core";
import { Passenger } from "../../models/passenger.interface";
import { PassengerDashboardService } from "../../passenger-dashboard.service";

@Component({
  selector: "passenger-viewer",
  styleUrls: ["passenger-viewer.component.scss"],
  template: `
  <div>
  {{ passenger | json }}</div>
  `,
})
export class PassengerViewerComponent implements OnInit {
  public passenger: Passenger;
  constructor(private passengerDashboardService: PassengerDashboardService) {}

  public ngOnInit() {
    this.passengerDashboardService.getPassenger(1).subscribe((data: Passenger) => {
      this.passenger = data;
    });
  }
}
