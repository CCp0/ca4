import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ICar } from '../interfaces/car';
import { CarApiService } from '../services/car-api.service';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  providers: [CarApiService]
})
export class CarComponent implements OnInit {
  @Input() carData!:ICar;
  @ViewChild('carMake') carMake!: ElementRef;
  //carImageWidth:number=300;

  constructor(private _carAPIService:CarApiService) { }

  deleteCar(carId:string){
    this._carAPIService.delCarData(carId);
  }
  editCar(carId:string){
    //this._carAPIService.editCarData(carId);
    
    //Attempting to manipulate DOM to change from <p> to <input> to edit
    
    //console.log(this.carMake(this.carMake?.nativeElement.value));
  }
  
  ngOnInit() {
    
  }
}