/*
* Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
* All rights reserved.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.scss']
})
export class GuideComponent implements OnInit {
  /**
   * PUBLIC Properties
   * place your public properties on top
   */
  title: 'SMART-NG' = 'SMART-NG';

  /**
   * PRIVATE Properties
   * place your private properties on top
   */

  constructor() { }

  ngOnInit() { }

}
