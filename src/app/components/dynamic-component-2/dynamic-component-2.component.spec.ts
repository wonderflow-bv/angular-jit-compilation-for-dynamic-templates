import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponent2Component } from './dynamic-component-2.component';

describe('DynamicComponent2Component', () => {
  let component: DynamicComponent2Component;
  let fixture: ComponentFixture<DynamicComponent2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponent2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
