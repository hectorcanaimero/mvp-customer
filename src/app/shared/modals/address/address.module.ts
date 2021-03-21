import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressComponent } from './address.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [AddressComponent],
  exports: [AddressComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
  ]
})
export class AddressModule { }
