import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriculturalProductsComponent } from './agricultural-products.component';

describe('AgriculturalProductsComponent', () => {
  let component: AgriculturalProductsComponent;
  let fixture: ComponentFixture<AgriculturalProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgriculturalProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgriculturalProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
