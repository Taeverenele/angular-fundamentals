import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [PassengerDashboardComponent, PassengerDetailComponent, PassengerCountComponent],
  exports: [PassengerDashboardComponent],
  bootstrap: [],
})
export class PassengerDashboardModule {}
