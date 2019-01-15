import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavigasiComponent } from './topnavigasi.component';

describe('TopnavigasiComponent', () => {
  let component: TopnavigasiComponent;
  let fixture: ComponentFixture<TopnavigasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopnavigasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopnavigasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
