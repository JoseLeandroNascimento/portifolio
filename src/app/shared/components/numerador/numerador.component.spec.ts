import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumeradorComponent } from './numerador.component';

describe('NumeradorComponent', () => {
  let component: NumeradorComponent;
  let fixture: ComponentFixture<NumeradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumeradorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumeradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
