import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DatabaseService } from './services/database.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayProductsComponent } from './display-products/display-products.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatabaseService, HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
