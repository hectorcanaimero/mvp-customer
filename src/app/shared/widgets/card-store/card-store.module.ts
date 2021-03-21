import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStoreComponent } from './card-store.component';



@NgModule({
  declarations: [CardStoreComponent],
  exports: [CardStoreComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule
  ]
})
export class CardStoreModule { }
