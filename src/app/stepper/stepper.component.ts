import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

interface Booking {
  firstName: string;
  lastName: string;
  room: string;
  date: string;
  email: string;
  start: number;
  end: number;
  from?: string;
  to?: string;
}

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"]
})
export class StepperComponent implements OnInit {
  rooms: Array<string> = ["Room 1", "Room 2", "Room 3", "Room 4"];
  formGroup: FormGroup;
  rawFormData;
  formData: Booking;
  bookings: Booking[] = [];
  isBooked: boolean = false;

  /** Returns a FormArray with the name 'formArray'. */
  get formArray(): AbstractControl | null {
    return this.formGroup.get("formArray");
  }

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this._formBuilder.group({
      formArray: this._formBuilder.array([
        this._formBuilder.group({
          date: ["", Validators.required],
          from: ["", Validators.required],
          to: ["", Validators.required]
        }),
        this._formBuilder.group({
          selectedRoom: ["", Validators.required]
        }),
        this._formBuilder.group({
          firstName: ["", Validators.required],
          lastName: ["", Validators.required]
        }),
        this._formBuilder.group({
          email: ["", [Validators.email, Validators.required]]
        })
      ])
    });
  }

  onSubmit() {
    const formArr = this.formGroup.value.formArray;
    this.rawFormData = formArr.reduce(function(acc, currentObj) {
      for (var key in currentObj) acc[key] = currentObj[key];
      return acc;
    }, {});
    const day = this.rawFormData.date.getDate();
    const start = this.combineDateAndTime(
      this.rawFormData.date,
      this.rawFormData.from
    );
    const end = this.combineDateAndTime(
      this.rawFormData.date,
      this.rawFormData.to
    );
    this.formData = {
      firstName: this.rawFormData.firstName,
      lastName: this.rawFormData.lastName,
      email: this.rawFormData.email,
      room: this.rawFormData.selectedRoom,
      date: this.rawFormData.date,
      from: this.rawFormData.from,
      to: this.rawFormData.to,
      start,
      end
    };
    this.checkIfBooked(this.bookings, this.formData);
    if (!this.isBooked) {
      this.bookings.push(this.formData);
    }
    console.log(this.bookings);
  }

  checkIfBooked(bookingsArr, newEntry) {
    if (bookingsArr) {
      // filter the bookings array by date and room (in case of large obj)
      const filteredArr = bookingsArr.filter(elem => {
        return elem.date === newEntry.date && elem.room === newEntry.room;
      });

      filteredArr.map(item => {
        if (item.start === newEntry.start || item.end === newEntry.end) {
          return (this.isBooked = true);
        } else if (item.start < newEntry.start && item.end < newEntry.end) {
          return (this.isBooked = false);
        } else if (item.start > newEntry.start && item.end > newEntry.end) {
          return (this.isBooked = false);
        } else {
          return (this.isBooked = true);
        }
      });
    }
  }

  private combineDateAndTime = function(date, time) {
    let timeSec = time + ":00";
    let year = date.getFullYear();
    let month = date.getMonth() + 1; // Jan is 0, dec is 11
    let day = date.getDate();
    let dateString = "" + year + "-" + month + "-" + day;
    let combined = new Date(dateString + " " + timeSec).getTime();
    return combined;
  };
}
