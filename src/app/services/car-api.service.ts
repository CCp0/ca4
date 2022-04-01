import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { ICar } from "../interfaces/car";

@Injectable({
  providedIn: 'root'
})
export class CarApiService {
    //Service wrapper around the native firestores SDK's
    //CollectionReference and Query Types
    carsDataCollection: AngularFirestoreCollection<ICar>;
    //Representation of any set of cars over any amount of time
    carsData!:Observable<ICar[]>;
    // array to hold all cars
    allCarsData!:ICar[];
    errorMessage!: string;

    constructor(private _http:HttpClient, private _afs:AngularFirestore) {
      // connect to the database
      this.carsDataCollection = _afs.collection<ICar>("cars_data");
    }

    getCarData():Observable<ICar[]> {
      this.carsData = this.carsDataCollection.valueChanges({idField:'id'});
      this.carsData.subscribe(
        data => console.log("getCarsData:" + JSON.stringify(data))
      )
      return this.carsData;
    }
    addCarData(car:ICar): void {
      this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
    }
    private handleError (err:HttpErrorResponse) {
      console.log('CarAPIService: ' + err.message);
      return throwError(err.message);
    }
    delCarData(carId:string):void
    {
      console.log(this.carsDataCollection.doc(carId));
      this.carsDataCollection.doc(carId).delete();
    }
}