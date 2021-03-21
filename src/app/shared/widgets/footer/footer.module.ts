import { AddressModule } from './../../modals/address/address.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [FooterComponent],
  exports: [FooterComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
    AddressModule,
  ]
})
export class FooterModule { }
