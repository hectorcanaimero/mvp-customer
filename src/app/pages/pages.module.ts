import { AccountModule } from './../shared/modals/account/account.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagesPageRoutingModule } from './pages-routing.module';

import { PagesPage } from './pages.page';

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    CommonModule,
    AccountModule,
    ReactiveFormsModule,
    PagesPageRoutingModule,
  ],
  declarations: [PagesPage]
})
export class PagesPageModule {}
