import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HibaListaComponent } from './hiba-lista.component';

describe('HibaListaComponent', () => {
  let component: HibaListaComponent;
  let fixture: ComponentFixture<HibaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HibaListaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HibaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
