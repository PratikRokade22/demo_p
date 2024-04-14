import { Component } from '@angular/core';
import { HookChildComponent } from './hook-child/hook-child.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-life-cycle-hook',
  standalone: true,
  imports: [HookChildComponent,CommonModule],
  templateUrl: './life-cycle-hook.component.html',
  styleUrl: './life-cycle-hook.component.css'
})
export class LifeCycleHookComponent {
mname:any;
staus=true;
  collectname(x:any){
    this.mname=x.value;
  }
  destroyComp(){
   this.staus=false;
  }
}
