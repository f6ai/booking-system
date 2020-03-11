/*
* Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
* All rights reserved.
*/

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmartLayoutModule, SmartMomentDateModule } from '@r-software/smart-ng';
import { SmartHeaderBaseSlotInfoComponent } from './components/smart-header-base-slot-info.component';
import { SmartHeaderBaseSlotButtonComponent } from './components/smart-header-base-slot-button.component';

@NgModule({
  imports: [
    /* angular stuff */
    CommonModule,
    /* Only import SmartLayoutModule from smart-ng here cause we need it only once*/
    SmartLayoutModule,
    SmartMomentDateModule
  ],
  exports: [
    CommonModule,
    SmartLayoutModule,
    SmartMomentDateModule
  ],
  declarations: [SmartHeaderBaseSlotInfoComponent, SmartHeaderBaseSlotButtonComponent],
  entryComponents: [SmartHeaderBaseSlotInfoComponent, SmartHeaderBaseSlotButtonComponent]
})
export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
