import { SearchComponent } from './../../modals/search/search.component';
import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() data: any = [];

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  search = () => console.log('Search');

  onSearch = async() => {
    const modal = await this.modalCtrl.create({
      component: SearchComponent
    });
    modal.present();
  }
}
