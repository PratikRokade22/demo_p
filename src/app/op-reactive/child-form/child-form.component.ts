import { Component ,Output,EventEmitter} from '@angular/core';
import { ReactiveFormsModule,FormGroup,FormControl,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './child-form.component.html',
  styleUrl: './child-form.component.css'
})
export class ChildFormComponent {


 info:any; 
  stf= new FormGroup({
    nm:new FormControl('',[Validators.required]),
    adr:new FormControl('',[Validators.required])
  })
  demo(){

    this.info=this.stf;
    this.stf.reset;
  }
}


