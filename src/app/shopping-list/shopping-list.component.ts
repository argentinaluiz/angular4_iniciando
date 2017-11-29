import { Component } from '@angular/core';
import {Shop} from '../shop';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  shopping = [];
  shop: Shop = {
    name: '',
    value: 0,
    date_launch: '2017-11-28'
  };
  add() {
    const shop = Object.assign({}, this.shop);
    this.shopping.push(shop);
  }
}
