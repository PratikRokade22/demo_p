import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceChild4Component } from './service-child4.component';

describe('ServiceChild4Component', () => {
  let component: ServiceChild4Component;
  let fixture: ComponentFixture<ServiceChild4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceChild4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceChild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
