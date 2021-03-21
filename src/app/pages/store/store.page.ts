import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {

  banner: any = [
      { url: 'https://cdn.accon.app/160762389422216628344182407373-1080p.jpg'},
      { url: 'https://cdn.accon.app/16076239291618081900025727013-1080p.jpg'},
      { url: 'https://cdn.accon.app/16076239453057187402344998988-1080p.jpg'}
  ];

  data: any = [
    {
      id: 1,
      slug: 'slug-1',
      name: 'producto #1',
      description: 'Lorem Ipsum, extrae todo, a traves de la mayonesa',
      price: 2.3,
      image: 'https://cdn.accon.app/160581332355838786339090496-1080p.jpg'
    },
    {
      id: 2,
      slug: 'slug-2',
      name: 'producto #2',
      description: 'Lorem Ipsum, extrae todo, a traves de la mayonesa',
      price: 2,
      image: 'https://cdn.accon.app/160581332355838786339090496-1080p.jpg'
    },
    {
      id: 3,
      slug: 'slug-3',
      name: 'producto #3',
      description: 'Lorem Ipsum, extrae todo, a traves de la mayonesa',
      price: 2.3,
      image: 'https://cdn.accon.app/160581332355838786339090496-1080p.jpg'
    },
    {
      id: 4,
      slug: 'slug-4',
      name: 'producto #4',
      description: 'Lorem Ipsum, extrae todo, a traves de la mayonesa',
      price: 2.3,
      image: 'https://cdn.accon.app/160581332355838786339090496-1080p.jpg'
    },
    {
      id: 5,
      slug: 'slug-5',
      name: 'producto #5',
      description: 'Lorem Ipsum, extrae todo, a traves de la mayonesa',
      price: 2.3,
      image: 'https://cdn.accon.app/160581332355838786339090496-1080p.jpg'
    }
  ];


  menu = [
    { name: 'Promo', url: '#promo' },
    { name: 'Pinchos', url: '#pinchos'  },
    { name: 'Hemburguesas', url: '#hamburguesas'  },
    { name: 'Pepito', url: '#pepitos'  },
    { name: 'Perro Caliente', url: '#perros' },
    { name: 'Pizza', url: '#pizza' },
    { name: 'Postres', url: '#postres' },
    { name: 'Refrescos', url: '#refrescos' },
    { name: 'Cervezas', url: '#cervezas' }
  ];


  constructor() { }

  ngOnInit() {
  }

}
