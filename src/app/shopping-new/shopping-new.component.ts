import { Component } from '@angular/core';
import {Shop} from '../shop';

@Component({
  selector: 'app-shopping-new',
  templateUrl: './shopping-new.component.html',
  styleUrls: ['./shopping-new.component.css']
})
export class ShoppingNewComponent {

  shop: Shop = {
    name: '',
    value: 0,
    date_launch: '2017-11-28'
  };
  add() {
    const shop = Object.assign({}, this.shop);
  }

}
