/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { TextFieldModule } from '@angular/cdk/text-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  SmartDividerModule,
  SmartGridModule,
  SmartIconModule
} from '@r-software/smart-ng';

@NgModule({
  declarations: [],
  imports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    /* cdk stuff */
    ScrollingModule,
    TextFieldModule,
    /* smart-ng stuff */
    SmartDividerModule,
    SmartGridModule,
    SmartIconModule
  ],
  exports: [
    /* angular stuff */
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    /* cdk stuff */
    ScrollingModule,
    TextFieldModule,
    /* smart-ng stuff */
    SmartDividerModule,
    SmartGridModule,
    SmartIconModule,
    /* your own custom components */
  ],
  providers: []
})
export class SharedModule { }
