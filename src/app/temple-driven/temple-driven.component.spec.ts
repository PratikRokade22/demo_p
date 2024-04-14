import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleDrivenComponent } from './temple-driven.component';

describe('TempleDrivenComponent', () => {
  let component: TempleDrivenComponent;
  let fixture: ComponentFixture<TempleDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleDrivenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
