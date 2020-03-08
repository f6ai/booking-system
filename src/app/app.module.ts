import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { StepperComponent } from "./stepper/stepper.component";

import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSelectModule
} from "@angular/material";

export class DemoMaterialModule {}

const materialModules = [
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatSelectModule
];

@NgModule({
  declarations: [AppComponent, StepperComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ...materialModules
  ],
  exports: [...materialModules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
