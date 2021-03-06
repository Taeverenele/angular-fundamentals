import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

import { IPassenger } from "../../models/passenger.interface";

@Component({
  selector: "passenger-detail",
  styleUrls: ["passenger-detail.component.scss"],
  template: `
    <div>
      <span class="status" [class.checked-in]="detail.checkedIn"></span>
      <div *ngIf="editing">
        <input
          type="text"
          [value]="detail.fullname"
          (input)="onNameChange(name.value)"
          #name>
      </div>
      <div *ngIf="!editing">
        {{ detail.fullname }}
      </div>
      <div class="date">
        Check in date:
        {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
      </div>
      <button (click)="toggleEdit()">
        {{ editing ? 'Done' : 'Edit' }}
      </button>
      <button (click)="onRemove()">
        Remove
      </button>
    </div>
  `,
})
export class PassengerDetailComponent implements OnChanges, OnInit {

  @Input()
  public detail: IPassenger;

  @Output()
  public edit: EventEmitter<any> = new EventEmitter();

  @Output()
  public remove: EventEmitter<any> = new EventEmitter();

  public editing: boolean = false;

  constructor() {}

  public ngOnChanges(changes) {
    if (changes.detail) {
      this.detail = Object.assign({}, changes.detail.currentValue);
    }
    console.log("ngOnChanges");
  }

  public ngOnInit() {
    console.log("ngOnInit");
  }

  public onNameChange(value: string) {
    this.detail.fullname = value;
  }

  public toggleEdit() {
    if (this.editing) {
      this.edit.emit(this.detail);
    }
    this.editing = !this.editing;
  }
  public onRemove() {
    this.remove.emit(this.detail);
  }
}
