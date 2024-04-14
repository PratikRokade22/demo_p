import { Component } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-online-api',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './online-api.component.html',
  styleUrl: './online-api.component.css'
})
export class OnlineApiComponent {
  onlineData:any=[];
  constructor (private x:HttpClient){
    this.x.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (Response)=>{
        this.onlineData=Response;
        console.log(this.onlineData);
      }
    )
  }

}
