import { Component } from '@angular/core';
import {  ChildComponentComponent} from './child-component/child-component.component';
import { ReactiveFormsModule,FormGroup,FormControl,FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-parent-component',
    standalone: true,
    templateUrl: './parent-component.component.html',
    styleUrl: './parent-component.component.css',
    imports: [ReactiveFormsModule,CommonModule,ChildComponentComponent,FormsModule]
})
export class ParentComponentComponent {
  info:any;

  studentf=new FormGroup({
    nm:new FormControl('',[Validators.required]),
    adr:new FormControl('',[Validators.required])

  });

demo(){
this.info=this.studentf.value;



};
}
