import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClient,HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule,FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './information.component.html',
  styleUrl: './information.component.css'
})
export class InformationComponent {
  
  infoData:any=[];
  infoData2:any=[];

  delinfo:any=[];
  msg="record added succesfully";
  msg1="record delete succesfully";

  
  constructor(private h:HttpClient){
    


  }

  ngOnInit():void{
    this.loaddata(),
    this.loaddata2();
  }
 
loaddata(){
  this.h.get('http://localhost/Angular_php/info-show.php').subscribe(
    (Response)=>{
      this.infoData=Response;
  
    }
  )
  }




  loaddata2(){
    this.h.get('http://localhost/Angular_php/infocode.php').subscribe(
      (Response)=>{
        this.infoData2=Response;
    
      }
    )
  }
  myform=new FormGroup({
    nm:new FormControl('',[Validators.required]),
    mob:new FormControl('',[Validators.required]),
    adr:new FormControl('',[Validators.required]),
    bdate:new FormControl('',[Validators.required]),
    
})

demo(){
  let infog={
    name:this.myform.value.nm,
    mobl:this.myform.value.mob,
    adress:this.myform.value.adr,
    date:this.myform.value.bdate,




  }
  this.h.post('http://localhost/Angular_php/addinfo.php',infog).subscribe(
    (Response:any)=>{
      this.msg=Response;

    }
  )
 
 this.loaddata();

};

delete(x:any){
//  console.log(x)
     
  this.h.post('http://localhost/Angular_php/delete-info.php',x).subscribe(
    (Response:any)=>{
      this.msg1=Response;

    }
  )


  this.loaddata();

};




}
