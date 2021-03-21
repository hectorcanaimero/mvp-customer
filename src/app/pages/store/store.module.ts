import { CardStoreModule } from './../../shared/widgets/card-store/card-store.module';
import { ListProductModule } from './../../shared/widgets/list-product/list-product.module';
import { BannerModule } from './../../shared/widgets/banner/banner.module';
import { FooterModule } from './../../shared/widgets/footer/footer.module';
import { HeaderModule } from './../../shared/widgets/header/header.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StorePageRoutingModule } from './store-routing.module';

import { StorePage } from './store.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    NgbModule,
    IonicModule,
    FormsModule,
    CommonModule,
    HeaderModule,
    FooterModule,
    BannerModule,
    CardStoreModule,
    ListProductModule,
    StorePageRoutingModule
  ],
  declarations: [StorePage]
})
export class StorePageModule {}
