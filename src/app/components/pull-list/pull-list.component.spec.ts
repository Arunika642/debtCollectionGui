import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullListComponent } from './pull-list.component';

describe('PullListComponent', () => {
  let component: PullListComponent;
  let fixture: ComponentFixture<PullListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PullListComponent]
    });
    fixture = TestBed.createComponent(PullListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
