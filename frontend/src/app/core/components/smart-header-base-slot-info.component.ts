/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { Component, Input } from '@angular/core';
import { SmartBaseSlotComponent } from '@r-software/smart-ng';

import { BaseSlotInfoInputType } from '../models/base-slot-info-input.type';

@Component({
  template: `<span>{{data.text}}</span>`
})

export class SmartHeaderBaseSlotInfoComponent implements SmartBaseSlotComponent {
  @Input() data: BaseSlotInfoInputType;
}
