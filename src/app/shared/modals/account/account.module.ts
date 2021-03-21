import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AccountComponent],
  exports: [AccountComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class AccountModule { }
