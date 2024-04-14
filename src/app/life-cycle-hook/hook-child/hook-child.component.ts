import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component ,DoCheck,Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-hook-child',
  standalone: true,
  imports: [],
  templateUrl: './hook-child.component.html',
  styleUrl: './hook-child.component.css'
})
export class HookChildComponent implements OnInit , OnChanges, OnDestroy,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,DoCheck {
  timer:any;
  no:number=1;
  constructor(){
    console.log('Constructor called');
  }

  ngOnInit(): void {
    console.log('ngOnInit called');

  }

  ngOnChanges(changes: SimpleChanges): void {
    
  
      console.log('ngOnChanges curent -' + changes['chiiddata'].currentValue);
      console.log('ngOnChanges previous -' + changes['chiiddata'].previousValue);
    
  }
ngAfterContentInit(): void {
  
}

ngAfterContentChecked(): void {
  
}
ngAfterViewInit(): void {
  
}
ngAfterViewChecked(): void {
  
}
ngDoCheck(): void {
  
}

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    clearInterval(this.timer)
  }
@ Input() chiiddata:any;
}
