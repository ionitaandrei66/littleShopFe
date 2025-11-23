import {Injectable} from "@angular/core";
import {CartServiceModel} from "../interfaces/cart.service.model";
import {BehaviorSubject, Observable} from "rxjs";
import {ShoppingCartProduct} from "../interfaces/shopping-cart-product.model";
import {Product} from "../interfaces/product.model";


@Injectable({
  providedIn: 'root'
})
export class CartService implements CartServiceModel<Product>{
  private cart: ShoppingCartProduct[] = [];


  //Securities measure and updatable for every client
  private readonly cartSubject: BehaviorSubject<ShoppingCartProduct[]>;
  readonly cart$: Observable<ShoppingCartProduct[]>;

  constructor() {
    this.cartSubject = new BehaviorSubject<ShoppingCartProduct[]>([]);
    this.cart$ = this.cartSubject.asObservable();
  }

  public addMore(item: Product, times: number): void {
    const itemFromTheCart: ShoppingCartProduct | undefined = this.cart.find((res: ShoppingCartProduct) => res.id === item.id)
    if(itemFromTheCart) {
      itemFromTheCart.howMany = times;
    } else {
      this.cart.push({...item, howMany: times});
    }
    this.fetchData();
  }

  public addOne(item: Product): void {
    const itemFromTheCart: ShoppingCartProduct | undefined = this.cart.find((res: ShoppingCartProduct) => res.id === item.id)
    if(itemFromTheCart) {
      itemFromTheCart.howMany++
    } else {
      this.cart.push({...item, howMany: 1});
    }
    this.fetchData();
  }

  public removeAll(): void {
    this.cart = [];
    this.fetchData();
  }

  public removeMore(item: ShoppingCartProduct, times: number): void {
    if(item && item.howMany > 1) {
      item.howMany = times ;
    } else {
      this.cart = this.cart.filter((res) => res.id !== item.id)
    }
    this.fetchData();
  }

  public removeOne(item: ShoppingCartProduct): void {
    if(item && item.howMany > 1) {
      item.howMany--;
    } else {
      this.cart = this.cart.filter((res) => res.id !== item.id)
    }
    this.fetchData();
  }

  public fetchData(): void {
    this.cartSubject.next(this.cart);
  }
}
