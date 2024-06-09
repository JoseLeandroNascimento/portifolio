import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRedesSociaisComponent } from './list-redes-sociais.component';

describe('ListRedesSociaisComponent', () => {
  let component: ListRedesSociaisComponent;
  let fixture: ComponentFixture<ListRedesSociaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRedesSociaisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRedesSociaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
