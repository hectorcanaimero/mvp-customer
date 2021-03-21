import { AddressComponent } from './../../modals/address/address.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onAddress = async() => {
    const modal = this.modalCtrl.create({
      component: AddressComponent
    });
    (await modal).present()
  }
}
