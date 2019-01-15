import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAdminCustomerComponent } from './add-admin-customer.component';

describe('AddAdminCustomerComponent', () => {
  let component: AddAdminCustomerComponent;
  let fixture: ComponentFixture<AddAdminCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAdminCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAdminCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
