import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  flag=true;

  check1(){
    if(this.flag==true){
       this.flag=false;
    }
    else{
      this.flag=true;
    }
  }

}
