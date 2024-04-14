import { Component } from '@angular/core';
import { ServiceChild1Component } from './service-child1/service-child1.component';
import { ServiceChild2Component } from './service-child2/service-child2.component';
import { ServiceChild3Component } from './service-child3/service-child3.component';
import { ServiceChild4Component } from './service-child4/service-child4.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceChild1Component,ServiceChild2Component,ServiceChild3Component,ServiceChild4Component],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
