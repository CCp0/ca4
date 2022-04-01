
export interface ICar {
    id:string;
    make: string;
    model: string;
    year: string;
    imageURL: string;
}
export class Car{
  id!:string;
  make: string;
  model: string;
  year: string;
  imageURL: string;

  constructor(make:string, model:string, year:string, imageURL:string){
    this.id = this.id;
    this.make = make;
    this.model = model;
    this.year = year;
    this.imageURL = imageURL;
  }
}