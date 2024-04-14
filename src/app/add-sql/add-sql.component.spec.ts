import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSqlComponent } from './add-sql.component';

describe('AddSqlComponent', () => {
  let component: AddSqlComponent;
  let fixture: ComponentFixture<AddSqlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSqlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
