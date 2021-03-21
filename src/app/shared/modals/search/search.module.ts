import { IonicModule } from '@ionic/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './search.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
  ]
})
export class SearchModule { }
