import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { PassengerCountComponent } from "./components/passenger-count/passenger-count.component";
import { PassengerDetailComponent } from "./components/passenger-detail/passenger-detail.component";
import { PassengerDashboardComponent } from "./containers/passenger-dashboard/passenger-dashboard.component";
import { PassengerViewerComponent } from "./containers/passenger-viewer/passenger-viewer.component";
import { PassengerDashboardService } from "./passenger-dashboard.service";
import { PassengerFormComponent } from "./components/passenger-form/passenger-form.component";

@NgModule({
  imports: [BrowserModule, CommonModule, HttpModule, FormsModule],
  declarations: [
    PassengerDashboardComponent,
    PassengerViewerComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerFormComponent,
  ],
  exports: [PassengerDashboardComponent, PassengerViewerComponent],
  providers: [PassengerDashboardService],
})
export class PassengerDashboardModule {}
