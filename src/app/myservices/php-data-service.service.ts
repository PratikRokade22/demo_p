import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhpDataServiceService {

  constructor(private h:HttpClient) { }


  employeeData(){
    return this.h.get('http://localhost/Angular_php/show.php');
  }
}
