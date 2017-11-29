import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import {Shop} from './shop';
@Directive({
  selector: '[appMyShop]'
})
export class MyShopDirective {

  private  _myShop: Shop;
  constructor(private el: ElementRef) {
    this.el.nativeElement.innerHTML += 'conteúdo inserido: ';
  }
  get myShop() {
    return this._myShop;
  }

  set myShop(value: Shop) {
    this._myShop = value;
    this.changeColorShop();
  }
    @Input()
    appMyShop: string;

    @HostListener('click')
    onClick() {
      alert(this.appMyShop);
    }

    changeColorShop(){
      this.el.nativeElement.style.color = this.appMyShop > 5 ? 'green' : 'red';
    }
}
