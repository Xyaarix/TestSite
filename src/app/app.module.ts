import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OpeningComponent } from './opening/opening.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    OpeningComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
