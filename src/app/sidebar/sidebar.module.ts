import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeStatsComponent } from './time-stats/time-stats.component';
import { SidebarComponent } from './sidebar.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    TimeStatsComponent,
    SidebarComponent,
    GameSettingsComponent
  ],
  exports: [
    SidebarComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class SidebarModule { }
