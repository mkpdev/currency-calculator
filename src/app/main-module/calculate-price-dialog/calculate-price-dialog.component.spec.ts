import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatePriceDialogComponent } from './calculate-price-dialog.component';

describe('CalculatePriceDialogComponent', () => {
  let component: CalculatePriceDialogComponent;
  let fixture: ComponentFixture<CalculatePriceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatePriceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePriceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
