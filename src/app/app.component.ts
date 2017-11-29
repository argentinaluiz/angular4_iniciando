import { Component } from '@angular/core';
import {Shop} from './shop';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de compras';
  shop: Array<Shop> = [
    {name: 'Cozinhar', value: 40, date_launch: '2017-11-03'}
  ];
}
