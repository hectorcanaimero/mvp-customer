import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './orders.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [OrdersComponent],
  exports: [OrdersComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
  ]
})
export class OrdersModule { }
