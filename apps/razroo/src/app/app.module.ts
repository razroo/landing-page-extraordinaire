import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RazrooAppRoutingModule } from './app.module.routing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NxModule } from '@nrwl/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RazrooAppRoutingModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
