import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() item: any = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onClose = () => this.modalCtrl.dismiss();

}
