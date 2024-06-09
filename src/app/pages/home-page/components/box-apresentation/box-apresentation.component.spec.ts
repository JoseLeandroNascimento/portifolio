import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxApresentationComponent } from './box-apresentation.component';

describe('BoxApresentationComponent', () => {
  let component: BoxApresentationComponent;
  let fixture: ComponentFixture<BoxApresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoxApresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoxApresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
