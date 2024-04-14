import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationCssComponent } from './validation-css.component';

describe('ValidationCssComponent', () => {
  let component: ValidationCssComponent;
  let fixture: ComponentFixture<ValidationCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidationCssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidationCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
