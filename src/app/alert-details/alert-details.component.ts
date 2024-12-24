import { Component, Input } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-alert-details',
  standalone: false,
  
  templateUrl: './alert-details.component.html',
  styleUrl: './alert-details.component.css'
})
export class AlertDetailsComponent {

  @Input() product!: Product;
  @Input() isEnabled!: boolean;


  clickCheckAvailablity(){
    window.alert(`Product ${this.product.name} is available`);
  }



}
