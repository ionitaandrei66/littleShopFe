import { NgForOf, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {products} from '../../products';
import {categories} from "../../categories";
import {SlideShoppingCartMenuComponent} from "../../components/slide-menu/slide-shopping-cart-menu.component";
import {ModalInfoComponent} from "../../components/modal-info/modal-info.component";
import {Product} from "../../shared/interfaces/product.model";
import {ShoppingCartProduct} from "../../shared/interfaces/shopping-cart-product.model";


@Component({
  selector: 'app-products-view',
  imports: [NgForOf, NgOptimizedImage, SlideShoppingCartMenuComponent, ModalInfoComponent],
  standalone: true,
  templateUrl: './products-view.component.html',
  styleUrl: './products-view.component.scss'
})
export class ProductsViewComponent {
  public showMenu = false;
  public product: Product = products[0];
  public productIndex: number = 0;
  public productMaxIndex: number = products.length - 1;
  public shoppingCart: ShoppingCartProduct[] = []
  protected readonly categories: string[] = categories;
  public showModalInfo: boolean = false;
  public modalInfoItem: Product = products[0];

  public nextProduct(): void {
    if(this.productIndex === this.productMaxIndex){
      this.productIndex = 0;
    } else {
      this.productIndex++
    }
    this.product = products[this.productIndex]
  }

  public prevProduct(): void {
    if(this.productIndex === 0){
      this.productIndex = this.productMaxIndex;
    } else {
      this.productIndex--
    }
    this.product = products[this.productIndex]
  }

  public addToCart(product: Product): void {
    const itemFromTheCart: ShoppingCartProduct | undefined = this.shoppingCart.find((res: ShoppingCartProduct) => res.id === product.id)
    if(itemFromTheCart) {
      itemFromTheCart.howMany++
    } else {
      this.shoppingCart.push({...product, howMany: 1});
    }
  }

  public openModalInfo(product: Product) {
    this.showModalInfo = true;
    this.modalInfoItem = product;
  }
}
