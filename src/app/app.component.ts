import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NgModuleComponent } from './ng-module/ng-module.component';
import { SwitchComponent } from './switch/switch.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,ForComponent,OutputComponent,InputComponent,SwitchComponent,NgModuleComponent,IfelseComponent,IfComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular17';
  st=false;
  md(){
    this.st= ! this.st
  }
}
