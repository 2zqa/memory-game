import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {NgbProgressbarModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
    declarations: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
  imports: [
    CommonModule,
    NgbProgressbarModule
  ]
})
export class HeaderModule { }
