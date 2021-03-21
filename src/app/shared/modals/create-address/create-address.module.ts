import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateAddressComponent } from './create-address.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CreateAddressComponent],
  exports: [CreateAddressComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
  ]
})
export class CreateAddressModule { }
