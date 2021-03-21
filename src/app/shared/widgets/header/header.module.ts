import { SearchModule } from './../../modals/search/search.module';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    NgbModule,
    IonicModule,
    CommonModule,
    SearchModule,
    ScrollToModule.forRoot()
  ]
})
export class HeaderModule { }
