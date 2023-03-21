import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixPizzaComponent } from './prix-pizza.component';

describe('PrixPizzaComponent', () => {
  let component: PrixPizzaComponent;
  let fixture: ComponentFixture<PrixPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrixPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrixPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
