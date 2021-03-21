import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  @Input() item: any = [];
  menu = [
    { name: 'Promo', url: '#promo' },
    { name: 'Pinchos', url: '#pinchos'  },
    { name: 'Hemburguesas', url: '#hamburguesas'  },
    { name: 'Pepito', url: '#pepitos'  },
  ];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  onSearchChange = (e) => console.log(e);
  onClose = () => this.modalCtrl.dismiss();

}
