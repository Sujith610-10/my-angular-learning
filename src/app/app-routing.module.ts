import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductShopComponent } from './product-shop/product-shop.component';
import { ProductDetialsComponent } from './product-detials/product-detials.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ComparisonCardComponent } from './comparison-card/comparison-card.component';

const routes: Routes = [

  {path:'products/:productId',component:ProductShopComponent},
  {path:'products',component:ProductDetialsComponent},
  {path:'',component:LandingpageComponent},
  {path:'cards',component:ComparisonCardComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
