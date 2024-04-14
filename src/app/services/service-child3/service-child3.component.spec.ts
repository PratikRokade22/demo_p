import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild3Component } from './service-child3.component';

describe('ServiceChild3Component', () => {
  let component: ServiceChild3Component;
  let fixture: ComponentFixture<ServiceChild3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceChild3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceChild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
