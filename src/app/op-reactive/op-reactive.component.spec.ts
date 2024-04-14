import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpReactiveComponent } from './op-reactive.component';

describe('OpReactiveComponent', () => {
  let component: OpReactiveComponent;
  let fixture: ComponentFixture<OpReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpReactiveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
