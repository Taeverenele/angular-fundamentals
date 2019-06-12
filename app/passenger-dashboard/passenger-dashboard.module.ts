import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [PassengerDashboardComponent],
  exports: [PassengerDashboardComponent],
  bootstrap: [],
})
export class PassengerDashboardModule {}
