import { Component, EventEmitter, Output } from '@angular/core';
import { ChildFormComponent } from './child-form/child-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-op-reactive',
  standalone: true,
  imports: [ChildFormComponent,CommonModule],
  templateUrl: './op-reactive.component.html',
  styleUrl: './op-reactive.component.css'
})
export class OpReactiveComponent {

  @Output() myevent = new EventEmitter<string>();


}
