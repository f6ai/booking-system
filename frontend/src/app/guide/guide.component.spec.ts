/*
 * Copyright (c) 2000 - 2019 by Raiffeisen Software GmbH.
 * All rights reserved.
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideComponent } from './guide.component';
import { SharedModule } from '../shared/shared.module';

describe('GuideComponent', () => {
  let component: GuideComponent;
  let fixture: ComponentFixture<GuideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideComponent ],
      imports: [
        SharedModule
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have as title "SMART-NG"', () => {
    expect(component.title).toEqual('SMART-NG');
  });
  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('SMART-NG');
  });
});
