import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup, Validators} from '@angular/forms';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-temp',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  templateUrl: './add-temp.component.html',
  styleUrl: './add-temp.component.css'
})
export class AddTempComponent {
  msg:any;

  constructor( private h:HttpClient){

  }

  tempform= new FormGroup({
    ct:new FormControl('',Validators.required),
    tmp:new FormControl('',Validators.required)
  });
    Demo(){
     let tempobj={
      city:this.tempform.value.ct,
      temp:this.tempform.value.tmp
         
     }
     console.log(tempobj);
     
     this.h.post('http://localhost/Angular_php/addtemp.php',tempobj).subscribe(
 
 
    (Response:any)=>{
     this.msg=Response;
    })
    this.tempform.reset
}
}