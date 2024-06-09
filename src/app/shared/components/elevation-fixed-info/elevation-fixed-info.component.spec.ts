import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevationFixedInfoComponent } from './elevation-fixed-info.component';

describe('ElevationFixedInfoComponent', () => {
  let component: ElevationFixedInfoComponent;
  let fixture: ComponentFixture<ElevationFixedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElevationFixedInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElevationFixedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
