import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-address',
  templateUrl: './create-address.component.html',
  styleUrls: ['./create-address.component.scss'],
})
export class CreateAddressComponent implements OnInit {

  @Input() item: any = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onClose = () => this.modalCtrl.dismiss();

}
