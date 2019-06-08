import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [BrowserModule, CommonModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
