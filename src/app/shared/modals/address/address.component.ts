import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {

  @Input() item: any = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onClose = () => this.modalCtrl.dismiss();

}
