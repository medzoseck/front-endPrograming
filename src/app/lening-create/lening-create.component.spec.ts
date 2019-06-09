import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeningCreateComponent } from './lening-create.component';

describe('LeningCreateComponent', () => {
  let component: LeningCreateComponent;
  let fixture: ComponentFixture<LeningCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeningCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeningCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
