import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfDefaultersComponent } from './list-of-defaulters.component';

describe('ListOfDefaultersComponent', () => {
  let component: ListOfDefaultersComponent;
  let fixture: ComponentFixture<ListOfDefaultersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListOfDefaultersComponent]
    });
    fixture = TestBed.createComponent(ListOfDefaultersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
