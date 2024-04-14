import { Routes} from '@angular/router';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { IfelseComponent } from './ifelse/ifelse.component';
import { NgModuleComponent } from './ng-module/ng-module.component';
import { SwitchComponent } from './switch/switch.component';
import { InputComponent } from './input/input.component';
import { OutputComponent } from './output/output.component';
import { Component } from '@angular/core';
import { ToggleComponent } from './toggle/toggle.component';
import { TempleDrivenComponent } from './temple-driven/temple-driven.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { TempformComponent } from './tempform/tempform.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ParentComponentComponent } from './parent-component/parent-component.component';
import { OpReactiveComponent } from './op-reactive/op-reactive.component';
import { HttpClientDemoComponent } from './http-client-demo/http-client-demo.component';
import { OnlineApiComponent } from './online-api/online-api.component';
import { AddSqlComponent } from './add-sql/add-sql.component';
import { SqltableComponent } from './sqltable/sqltable.component';
import { ServicesComponent } from './services/services.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { TableFilterComponent } from './table-filter/table-filter.component';
import { TempbComponent } from './tempb/tempb.component';
import { InformationComponent } from './information/information.component';
import { LifeCycleHookComponent } from './life-cycle-hook/life-cycle-hook.component';
import { ValidationCssComponent } from './validation-css/validation-css.component';
import { PipeComponent } from './pipe/pipe.component';


export const routes: Routes = [
    {path:"PipeComponent",component:PipeComponent},
    {path:"TableFilterComponent",component:TableFilterComponent},

    {path:"ValidationCssComponent",component:ValidationCssComponent},

    {path:"LifeCycleHookComponent",component:LifeCycleHookComponent},

    {path:"Temperature",component:TemperatureComponent},
    {path:"TempbComponent",component:TempbComponent},
    {path:"InformationComponent",component:InformationComponent},

     
    {path:"for",component:ForComponent},
    {path:"Temperature",component:TemperatureComponent},


   

    {path:"if",component:IfComponent},
    {path:"ifelse",component:IfelseComponent},
    {path:"ngModel",component:NgModuleComponent},
    {path:"OnlineApiComponent",component:OnlineApiComponent},
    {path:"AddSqlComponent",component:AddSqlComponent},
    {path:"Sqltable",component:SqltableComponent},



    {path:"ReactiveFormComponent",component:ReactiveFormComponent},
    {path:"switch",component:SwitchComponent},
    {path:"input",component:InputComponent},
    {path:"output",component:OutputComponent},
    {path:"toggle",component:ToggleComponent},
    {path:"TempleDriven",component:TempleDrivenComponent},
    {path:"StudentMarksComponent",component:StudentMarksComponent},
    {path:"TempformComponent",component:TempformComponent},
    {path:"ParentComponentComponent",component:ParentComponentComponent},
    {path:"OpReactiveComponent",component:OpReactiveComponent},
    {path:"HttpClientDemoComponent",component:HttpClientDemoComponent}


    
];
