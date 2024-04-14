import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-temple-driven',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './temple-driven.component.html',
  styleUrl: './temple-driven.component.css'
})
export class TempleDrivenComponent {
  student=[{
    name:"TEJAS",
    adress:"SATARA"
  }];

  addstudent(data:any){
   this.student.push({
    name:data.nm,
    adress:data.adr
   });
  }

}
