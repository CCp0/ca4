import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html'
})
export class CarComponent implements OnInit {
  @Input() carData!:ICar;
  carImageWidth:number=300;

  constructor() { }

  ngOnInit() {
    
  }

  title = 'carsales-nosql';
}