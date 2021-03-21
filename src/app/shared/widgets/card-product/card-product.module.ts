import { ProductModule } from './../../modals/product/product.module';
import { CardProductComponent } from './card-product.component';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [CardProductComponent],
  exports: [CardProductComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
    ProductModule,
  ]
})
export class CardProductModule { }
