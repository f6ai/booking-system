/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuideComponent } from './guide.component';
import { GuideRoutingModule } from './guide-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [GuideComponent],
  imports: [
    CommonModule,
    GuideRoutingModule,
    SharedModule
  ],
  exports: [GuideComponent]
})
export class GuideModule {
}
