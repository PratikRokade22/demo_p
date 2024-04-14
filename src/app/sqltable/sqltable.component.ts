import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClient,HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-sqltable',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './sqltable.component.html',
  styleUrl: './sqltable.component.css'
})
export class SqltableComponent {
  msg:any;
  constructor(private h:HttpClient){

  }

  studentform= new FormGroup({
     nm:new FormControl('',Validators.required),
     mr:new FormControl('',Validators.required),
     hn:new FormControl('',Validators.required),
     en:new FormControl('',Validators.required),
     mt:new FormControl('',Validators.required),
     hs:new FormControl('',Validators.required)



  })
  demo(){
    let student={
      name:this.studentform.value.nm,
      mar:this.studentform.value.mr,
      hin:this.studentform.value.hn,
      eng:this.studentform.value.en,
      mat:this.studentform.value.mt,
      his:this.studentform.value.hs

    }
    console.log(student);
    this.h.post('http://localhost/Angular_php/addresult.php',student).subscribe(
      (Response:any)=>{
        this.msg=Response;
      }
    );

  }
}
