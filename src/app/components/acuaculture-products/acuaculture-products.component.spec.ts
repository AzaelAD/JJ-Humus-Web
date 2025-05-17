import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcuacultureProductsComponent } from './acuaculture-products.component';

describe('AcuacultureProductsComponent', () => {
  let component: AcuacultureProductsComponent;
  let fixture: ComponentFixture<AcuacultureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcuacultureProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcuacultureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
