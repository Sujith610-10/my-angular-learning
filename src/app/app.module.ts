import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetialsComponent,
    AlertDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
