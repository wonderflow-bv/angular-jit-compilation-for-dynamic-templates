import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnknownDynamicComponentComponent } from './unknown-dynamic-component.component';

describe('UnknownDynamicComponentComponent', () => {
  let component: UnknownDynamicComponentComponent;
  let fixture: ComponentFixture<UnknownDynamicComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnknownDynamicComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnknownDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
