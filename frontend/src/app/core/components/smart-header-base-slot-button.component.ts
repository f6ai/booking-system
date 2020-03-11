/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

/* tslint:disable:use-host-property-decorator */
import { Component, Input } from '@angular/core';
import { SmartBaseButtonSlotComponent } from '@r-software/smart-ng';

import { BaseSlotButtonInputType } from '../models/base-slot-button-input.type';

@Component({
  template: `
    <ng-container *ngIf="disabledFromRx(data.disabled); else cbTemp">
      <button smartButton [color]="data.primary ? 'primary' : 'secondary'"
        [disabled]="data.disabled | async" [type]="data.type"
        (click)="data.callback()">{{data.text}}</button>
    </ng-container>
    <ng-template #cbTemp>
      <button smartButton [color]="data.primary ? 'primary' : 'secondary'"
        [type]="data.type" [disabled]="setDisabled(data.disabled)"
        (click)="data.callback()">{{data.text}}</button>
    </ng-template>`,
  host: {
    role: 'button',
    class: 'ml-2'
  },
})

export class SmartHeaderBaseSlotButtonComponent implements SmartBaseButtonSlotComponent {
  @Input() data: BaseSlotButtonInputType;

  disabledFromRx = (state: any): boolean => typeof state === 'object';
  setDisabled = (state: (() => boolean) | boolean): boolean => typeof state === 'function' ? state() : state;
}

