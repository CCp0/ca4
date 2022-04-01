import { Component, Input, OnInit } from '@angular/core';
import { ICar } from '../interfaces/car';
import { CarApiService } from '../services/car-api.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  providers: [CarApiService]
})
export class CarComponent implements OnInit {
  @Input() carData!:ICar;
  carImageWidth:number=300;

  constructor(private _carAPIService:CarApiService) { }

  deleteCar(carId:string){
    this._carAPIService.delCarData(carId);
  }
  
  ngOnInit() {
    
  }
}