import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicComponentComponent } from './dynamic-component.component';

describe('DynamicComponentComponent', () => {
  let component: DynamicComponentComponent;
  let fixture: ComponentFixture<DynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
