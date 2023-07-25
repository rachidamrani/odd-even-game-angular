import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { ControlGameComponent } from './control-game/control-game.component';

@NgModule({
  declarations: [AppComponent, EvenComponent, OddComponent, ControlGameComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
