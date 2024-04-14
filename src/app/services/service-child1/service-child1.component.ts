import { Component } from '@angular/core';
import { PhpDataServiceService } from '../../myservices/php-data-service.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-service-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-child1.component.html',
  styleUrl: './service-child1.component.css'
})
export class ServiceChild1Component {
  employeearray:any=[];
  constructor(private sp:PhpDataServiceService){
    this.sp.employeeData().subscribe(
      (Response)=>{
      this.employeearray=Response;
      }
    )
  }

}
