import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarComponent } from './car.component';
import { AngularFirestoreModule} from '@angular/fire/compat/firestore';
import { environment } from 'src/environments/environment';
import { CarlistComponent } from '../carlist/carlist.component';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

@NgModule({
  declarations: [
    CarComponent,
    CarlistComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [CarComponent]
})
export class AppModule { }
