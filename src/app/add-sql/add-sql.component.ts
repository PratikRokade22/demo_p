import { Component } from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validators } from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-sql',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './add-sql.component.html',
  styleUrl: './add-sql.component.css'
})
export class AddSqlComponent {
  msg:any;
  constructor(private h : HttpClient){

  }
  studentform = new FormGroup({
    nm:new FormControl('',Validators.required),
    adr:new FormControl('',Validators.required)
  });
  demo(){
    let student={
      name:this.studentform.value.nm,
      address:this.studentform.value.adr,
      
    }
    console.log(student);
    this.h.post('http://localhost/Angular_php/add.php',student).subscribe(


   (Response:any)=>{
    this.msg=Response;
   }
    );
  }
  

}
