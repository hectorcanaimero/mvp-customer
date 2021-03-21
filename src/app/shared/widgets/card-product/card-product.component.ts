import { ProductComponent } from './../../modals/product/product.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss'],
})
export class CardProductComponent implements OnInit {

  @Input() item: any = {};

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onProduct = async (item: any) => {
    const modal = await this.modalCtrl.create({
      componentProps: { item },
      component: ProductComponent
    });
    modal.present();
  }
}
