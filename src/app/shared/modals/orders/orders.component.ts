import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {

  @Input() item: any = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onClose = () => this.modalCtrl.dismiss();

}
