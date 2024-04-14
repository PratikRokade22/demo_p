import { Component } from '@angular/core';
import { CommonModule, getLocaleEraNames } from '@angular/common';
import { MycurrencyPipe } from "../pipes/mycurrency.pipe";

@Component({
    selector: 'app-pipe',
    standalone: true,
    templateUrl: './pipe.component.html',
    styleUrl: './pipe.component.css',
    imports: [CommonModule, MycurrencyPipe]
})
export class PipeComponent {
name="pratik";
city="mahabaleshwar";
employee={
  
  nm:"Ram",
  adr:"satara",
  post:""


}
mycontact='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident cum dolorum temporibus ipsum veniam labore modi saepe tempora nisi. Perferendis ipsam voluptatum, eaque laborum tempore ab voluptas reprehenderit culpa corporis!'

}
