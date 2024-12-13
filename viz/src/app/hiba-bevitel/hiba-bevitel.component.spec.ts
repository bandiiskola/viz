import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibaBevitelComponent } from './hiba-bevitel.component';

describe('HibaBevitelComponent', () => {
  let component: HibaBevitelComponent;
  let fixture: ComponentFixture<HibaBevitelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibaBevitelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibaBevitelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
