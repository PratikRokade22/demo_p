import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild1Component } from './service-child1.component';

describe('ServiceChild1Component', () => {
  let component: ServiceChild1Component;
  let fixture: ComponentFixture<ServiceChild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceChild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
