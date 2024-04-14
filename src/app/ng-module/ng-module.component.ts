import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-module',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './ng-module.component.html',
  styleUrl: './ng-module.component.css'
})
export class NgModuleComponent {
  swt:any;
  x:any;
  mod(){
    this.x=this.swt;
  }

}
