import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from "@angular/forms";

@Component({
  selector: "app-stepper",
  templateUrl: "./stepper.component.html",
  styleUrls: ["./stepper.component.scss"]
})
export class StepperComponent implements OnInit {
  rooms: Array<string> = ["Room 1", "Room 2", "Room 3", "Room 4"];
  formGroup: FormGroup;
  nameFormGroup: FormGroup;
  emailFormGroup: FormGroup;

  steps = [
    { label: "Enter your name", content: "Last name, First name." },
    { label: "Confirm your contact information", content: "123-456-7890" },
    { label: "Confirm your address", content: "1600 Amphitheater Pkwy MTV" },
    { label: "You are now done", content: "Finished!" }
  ];

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
          email: ["", Validators.email]
        })
      ])
    });
  }

  onSubmit() {
    console.log("Submitted information:", this.formGroup);
  }
}
