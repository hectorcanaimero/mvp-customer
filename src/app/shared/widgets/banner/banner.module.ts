import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerComponent } from './banner.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [BannerComponent],
  exports: [BannerComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
  ]
})
export class BannerModule { }
