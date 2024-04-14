import { Component } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-http-client-demo',
  standalone: true,
  imports: [HttpClientModule,CommonModule],
  templateUrl: './http-client-demo.component.html',
  styleUrl: './http-client-demo.component.css'
})
export class HttpClientDemoComponent {
 StudentData:any=[];
 constructor(private h :HttpClient){
  this.h.get('http://localhost/Angular_php/show.php').subscribe(
    (Response)=>{
      this.StudentData=Response;
    console.log(this.StudentData);
    }
  )
 }

}
