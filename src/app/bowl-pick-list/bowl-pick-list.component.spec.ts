import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BowlPickListComponent } from './bowl-pick-list.component';

describe('BowlPickListComponent', () => {
  let component: BowlPickListComponent;
  let fixture: ComponentFixture<BowlPickListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BowlPickListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BowlPickListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
