/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuideComponent } from './guide.component';

const routes: Routes = [
  {
    path: 'guide',
    component: GuideComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideRoutingModule { }
