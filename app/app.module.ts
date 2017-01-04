import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';


import { AppComponent }  from './app.component';
import { ChannelComponent } from './channel.component';

import { AppRoutingModule } from './app-routing.module';


@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ChannelComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

