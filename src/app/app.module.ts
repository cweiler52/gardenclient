import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination'
import { DatabaseService } from './services/database.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { DisplayProductsComponent } from './display-products/display-products.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthComponent,
    DisplayProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [
    DatabaseService, HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
