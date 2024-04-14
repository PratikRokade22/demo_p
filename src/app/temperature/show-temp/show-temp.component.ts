import { CommonModule, NgSwitchCase } from '@angular/common';
import { HttpClientModule ,HttpClient} from '@angular/common/http';

import { Component } from '@angular/core';
import { ReactiveFormsModule,FormControl,Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-show-temp',
  standalone: true,
  imports: [HttpClientModule,CommonModule,NgSwitchCase,ReactiveFormsModule],
  templateUrl: './show-temp.component.html',
  styleUrl: './show-temp.component.css'
})
export class ShowTempComponent {
  tempdata:any=[];
  x:any
  i:any























 constructor(private h :HttpClient){
  this.h.get('http://localhost/Angular_php/showtemp.php').subscribe(
    (Response)=>{
      this.tempdata=Response;
    
    }
  )
 }

}
