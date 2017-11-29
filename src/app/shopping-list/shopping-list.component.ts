import { Component, Input } from '@angular/core';
import { Component, Input } from '@angular/core';
import {Shop} from '../shop';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input
  shopping;
}
