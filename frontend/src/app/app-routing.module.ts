/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/guide', pathMatch: 'full' },
  { path: 'guide', loadChildren: './guide/guide.module#GuideModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
