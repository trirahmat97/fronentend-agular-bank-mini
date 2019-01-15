import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UbahpinComponent } from './ubahpin.component';

describe('UbahpinComponent', () => {
  let component: UbahpinComponent;
  let fixture: ComponentFixture<UbahpinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UbahpinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UbahpinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
