import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqltableComponent } from './sqltable.component';

describe('SqltableComponent', () => {
  let component: SqltableComponent;
  let fixture: ComponentFixture<SqltableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SqltableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SqltableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
