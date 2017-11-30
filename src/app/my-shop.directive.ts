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
  get appMyShop() {
    return this._myShop;
  }

  @Input()
  set appMyShop(value: Shop) {
    this._myShop = value;
    this.changeColorShop();
  }

    @HostListener('click')
    onClick() {
      alert(this._myShop);
    }

    changeColorShop(){
      console.log(this.appMyShop);
      this.el.nativeElement.style.color = this._myShop.value > 5 ? 'green' : 'red';
    }
}
