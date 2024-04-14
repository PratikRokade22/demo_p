import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSwitchCase } from '@angular/common';


@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule,FormsModule,NgSwitchCase],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
sw:any;
x:any;


check(){
this.x=this.sw;
  
}

}
