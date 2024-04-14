import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-student-marks',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './student-marks.component.html',
  styleUrl: './student-marks.component.css'
})
export class StudentMarksComponent {


  Total: any;
  tl: any;
  pr: any;
  
  mymarks=[{
    name:"ram",
    marathi:100,
    Hindi:100,
    English:100,
    maths:100,
    history:100,
    Total:500,
    per:100


  }];

 
  marks(data:any){
  this.tl=data.mr+data.hn+data.en+data.mt+data.hs,
  this.pr=this.tl/5

  this.mymarks.push({
    name: data.nm,
    marathi: data.mr,
    Hindi: data.hn,
    English: data.en,
    maths: data.mt,
    history: data.hs,
    Total: this.tl,
    per:this.pr,
    
  })


 
  };

}
