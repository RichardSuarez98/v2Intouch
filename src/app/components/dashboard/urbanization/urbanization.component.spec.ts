import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbanizationComponent } from './urbanization.component';

describe('UrbanizationComponent', () => {
  let component: UrbanizationComponent;
  let fixture: ComponentFixture<UrbanizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrbanizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrbanizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
