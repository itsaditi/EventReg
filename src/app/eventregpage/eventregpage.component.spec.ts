import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregpageComponent } from './eventregpage.component';

describe('EventregpageComponent', () => {
  let component: EventregpageComponent;
  let fixture: ComponentFixture<EventregpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventregpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventregpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
