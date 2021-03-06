
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyShopDirective } from './my-shop.directive';
import { ShoppingNewComponent } from './shopping-new/shopping-new.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyShopDirective,
    ShoppingNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
