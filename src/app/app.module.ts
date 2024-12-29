import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { AlertDetailsComponent } from './alert-details/alert-details.component';
import { ComparisonCardComponent } from './comparison-card/comparison-card.component';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetialsComponent,
    AlertDetailsComponent,
    ComparisonCardComponent,
    ProductShopComponent,
    LandingpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
