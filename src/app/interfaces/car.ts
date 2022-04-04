
export interface ICar {
    id:string;
    make: string;
    model: string;
    year: string;
    imageURL: string;
    carReg: string;
}
export class Car{
  id!:string;
  make: string;
  model: string;
  year: string;
  imageURL: string;
  carReg: string;

  constructor(make:string, model:string, year:string, imageURL:string, carReg: string){
    this.id = this.id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.imageURL = imageURL;
    this.carReg = carReg;
  }
}