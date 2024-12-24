import { Component } from '@angular/core';
import { products } from '../../data/products';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-detials',
  standalone: false,
  templateUrl: './product-detials.component.html',
  styleUrl: './product-detials.component.css'
})
export class ProductDetialsComponent {

  pageTitle: string = 'Product Details';
  products :Product[]= products
  isEnabled : boolean = false;

  toggleEnable(){
    this.isEnabled = !this.isEnabled;
  }
}
