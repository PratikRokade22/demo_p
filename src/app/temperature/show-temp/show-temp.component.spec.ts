import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTempComponent } from './show-temp.component';

describe('ShowTempComponent', () => {
  let component: ShowTempComponent;
  let fixture: ComponentFixture<ShowTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowTempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
