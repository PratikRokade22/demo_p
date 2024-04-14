import { Component } from '@angular/core';
import {  ReactiveFormsModule, } from '@angular/forms';
import { FormGroup,FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-validation-css',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './validation-css.component.html',
  styleUrl: './validation-css.component.css'
})
export class ValidationCssComponent {

myform=new FormGroup({
  nm:new FormControl('',[Validators.required,Validators.pattern('^[a-zA-Z \-\']+')]),
  mb:new FormControl('',[Validators.required,Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]),

})
}
