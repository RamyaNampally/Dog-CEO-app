import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogCeoComponent } from './dog-ceo.component';

describe('DogCeoComponent', () => {
  let component: DogCeoComponent;
  let fixture: ComponentFixture<DogCeoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DogCeoComponent]
    });
    fixture = TestBed.createComponent(DogCeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
