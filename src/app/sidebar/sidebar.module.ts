import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighscoresComponent } from './highscores/highscores.component';
import { SidebarComponent } from './sidebar.component';
import { GameSettingsComponent } from './game-settings/game-settings.component';



@NgModule({
  declarations: [
    HighscoresComponent,
    SidebarComponent,
    GameSettingsComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SidebarModule { }
