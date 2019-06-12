import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PassengerDashboardModule } from "./passenger-dashboard/passenger-dashboard.module";

@NgModule({
  imports: [
    // angular modules
    BrowserModule, CommonModule,
    // custom modules
    PassengerDashboardModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
