import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NegritoComponent } from './negrito.component';

describe('NegritoComponent', () => {
  let component: NegritoComponent;
  let fixture: ComponentFixture<NegritoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NegritoComponent]
    });
    fixture = TestBed.createComponent(NegritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
