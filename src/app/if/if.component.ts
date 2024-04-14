import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-if',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if.component.html',
  styleUrl: './if.component.css'
})
export class IfComponent {
status=false;

check()  
  {
  this.status =true ;
    }
  }





