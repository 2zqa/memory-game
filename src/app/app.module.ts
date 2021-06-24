import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BoardModule} from "./board/board.module";
import {SidebarModule} from "./sidebar/sidebar.module";

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        BoardModule,
        SidebarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
