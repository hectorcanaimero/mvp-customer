import { CardProductModule } from './../card-product/card-product.module';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListProductComponent } from './list-product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ListProductComponent],
  exports: [ListProductComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
    CardProductModule,
  ]
})
export class ListProductModule { }
