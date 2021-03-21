import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss'],
})
export class ListProductComponent implements OnInit {

  @Input() data: any = [];
  @Input() menu: any = [];

  constructor() { }

  ngOnInit() {}

}
