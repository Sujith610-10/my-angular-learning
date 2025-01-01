import { Component } from '@angular/core';

@Component({
  selector: 'app-comparison-card',
  standalone: false,
  
  templateUrl: './comparison-card.component.html',
  styleUrl: './comparison-card.component.css'
})
export class ComparisonCardComponent {

  isPainting : Boolean = false;
  isElevation : Boolean = false;
  isInterior : Boolean = false;
  isStructure : Boolean = false;

  constructor(){

  }

  ngOnInit():void{

  }

  togglePaint(){
    this.isPainting = !this.isPainting;
  }

  toggleElevation(){
    this.isElevation = !this.isElevation;
  }
  toggleInterior(){
    this.isInterior = !this.isInterior;
  }
  toggleStructure(){
    this.isStructure = !this.isStructure;
  }

}
