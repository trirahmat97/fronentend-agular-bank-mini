import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUComponent } from './footer-u.component';

describe('FooterUComponent', () => {
  let component: FooterUComponent;
  let fixture: ComponentFixture<FooterUComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterUComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
