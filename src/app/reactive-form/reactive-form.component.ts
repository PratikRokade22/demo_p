import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  /* form object*/
  studentform=new FormGroup({
    nm:new FormControl('',[Validators.required]),
    adr:new FormControl('',[Validators.required,Validators.minLength(10)])

  });
  nm:any;
  adr:any;
  studenta=[{
    name:"ram",
        adress:"wai"
  }];
  demo(data:any){
   this.studenta.push({
     name:data.nm,
     adress: data.adr
   });
  }

}
