import { Component } from '@angular/core';
import { AddTempComponent } from './add-temp/add-temp.component';
import { ShowTempComponent } from './show-temp/show-temp.component';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [AddTempComponent,ShowTempComponent],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css'
})
export class TemperatureComponent {

}
