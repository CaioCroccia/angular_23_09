import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { JuroCComponent } from './juro-c/juro-c.component';
import { JuroSComponent } from './juro-s/juro-s.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, JuroCComponent, JuroSComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
