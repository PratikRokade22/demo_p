import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempbComponent } from './tempb.component';

describe('TempbComponent', () => {
  let component: TempbComponent;
  let fixture: ComponentFixture<TempbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempbComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
