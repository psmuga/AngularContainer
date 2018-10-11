/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppTuneComponent } from './app-tune.component';

describe('AppTuneComponent', () => {
  let component: AppTuneComponent;
  let fixture: ComponentFixture<AppTuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
