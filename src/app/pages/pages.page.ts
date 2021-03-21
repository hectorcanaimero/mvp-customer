import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { AccountComponent } from '../shared/modals/account/account.component';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.page.html',
  styleUrls: ['./pages.page.scss'],
})
export class PagesPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onAccount = async() => {
    const modal = await this.modalCtrl.create({
      component: AccountComponent
    });
    modal.present();
  }

}
