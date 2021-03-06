import { Injectable } from "@angular/core";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import { IPassenger } from "./models/passenger.interface";

const PASSENGER_API: string = "/api/passengers";

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {
    console.log(this.http);
  }

  public getPassengers(): Promise<IPassenger[]> {
    return this.http.get(PASSENGER_API).toPromise()
      .then((response) => response.json());
  }

  public getPassenger(id: number): Observable<IPassenger> {
    return this.http.get(`${PASSENGER_API}/${id}`).map((response) => response.json());
  }

  public updatePassenger(passenger: IPassenger): Observable<IPassenger> {
    // Headers and request options not needed for this http request
    // but here to show how can/should be done
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const options = new RequestOptions({ headers });
    return this.http.put(`${PASSENGER_API}/${passenger.id}`, passenger, options).map(
      (response) => response.json(),
    ).catch((error: any) => Observable.throw(error.json()));
  }

  public removePassenger(passenger: IPassenger): Observable<IPassenger> {
    return this.http.delete(`${PASSENGER_API}/${passenger.id}`).map(
      (response) => response.json()
      ).catch((error: any) => Observable.throw(error.json()));
  }
}
