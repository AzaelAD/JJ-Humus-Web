import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquacultureProductsComponent } from './aquaculture-products.component';

describe('AquacultureProductsComponent', () => {
  let component: AquacultureProductsComponent;
  let fixture: ComponentFixture<AquacultureProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AquacultureProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquacultureProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
