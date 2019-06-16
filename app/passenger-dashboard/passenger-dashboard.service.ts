import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { Passenger } from "./models/passenger.interface";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }

  public getPassengers(): Observable<Passenger[]> {
    return this.http.get(PASSENGER_API).map(
      (response) => response.json()
    );
  }
}
