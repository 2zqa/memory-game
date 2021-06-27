import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BoardModule} from "./board/board.module";
import {SidebarModule} from "./sidebar/sidebar.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderModule} from "./header/header.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BoardModule,
    SidebarModule,
    NgbModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
