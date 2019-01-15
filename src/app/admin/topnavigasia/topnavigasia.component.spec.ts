import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavigasiaComponent } from './topnavigasia.component';

describe('TopnavigasiaComponent', () => {
  let component: TopnavigasiaComponent;
  let fixture: ComponentFixture<TopnavigasiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigasiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavigasiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
