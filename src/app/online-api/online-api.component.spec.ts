import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineApiComponent } from './online-api.component';

describe('OnlineApiComponent', () => {
  let component: OnlineApiComponent;
  let fixture: ComponentFixture<OnlineApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineApiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OnlineApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
