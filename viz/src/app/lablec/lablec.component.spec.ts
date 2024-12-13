import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LablecComponent } from './lablec.component';

describe('LablecComponent', () => {
  let component: LablecComponent;
  let fixture: ComponentFixture<LablecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LablecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LablecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
