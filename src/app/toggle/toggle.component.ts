import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@Component({
  selector: 'app-toggle',
 
  
  standalone: true,
  imports: [MatSlideToggleModule,FormsModule,CommonModule],
  templateUrl: './toggle.component.html',
  styleUrl: './toggle.component.css'
})
export class ToggleComponent {
  htmlCode: string = '';
  flag=false;
change(){
  
  this.flag =  ! this.flag;
};

}
