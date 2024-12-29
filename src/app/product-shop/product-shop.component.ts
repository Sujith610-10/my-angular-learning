import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { products } from '../../data/products';
import { Product } from '../../interfaces/product';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-product-shop',
  standalone: false,
  
  templateUrl: './product-shop.component.html',
  styleUrl: './product-shop.component.css'
})
export class ProductShopComponent {
  product: Product;

  constructor(
    private route: ActivatedRoute, //Dependency injection - Services injected into component class by calling its constructor
    private router:Router
  ){}

  ngOnInit():void{

    const routeParams = this.route.snapshot.paramMap; // snapshot- get all the urls, paramMap - will return as Map

    const id = Number(routeParams.get("productId"));

    this.product = products.find(product=>product.id===id);

  }

  navigateToProductDetails(){
    this.router.navigate(['/products'])
  }


}
