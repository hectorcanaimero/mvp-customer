import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [
    NgbModule,
    IonicModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ProductModule { }
