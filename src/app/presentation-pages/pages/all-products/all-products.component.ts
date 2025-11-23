import {Component, DestroyRef, inject, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {SlideShoppingCartMenuComponent} from "../../components/slide-menu/slide-shopping-cart-menu.component";
import {products} from "../../products";
import {ShoppingCartProduct} from "../../shared/interfaces/shopping-cart-product.model";
import {Product} from "../../shared/interfaces/product.model";
import {CartService} from "../../shared/services/cart.service";
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-all-products',
  imports: [
    NgOptimizedImage,
    SlideShoppingCartMenuComponent
  ],
  templateUrl: './all-products.component.html',
  standalone: true,
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{
  public shoppingCart: ShoppingCartProduct[] = [];
  public showMenu = false;
  public products: Product[] = products;

  private readonly destroyRef = inject(DestroyRef);
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((cart: ShoppingCartProduct[]) => this.shoppingCart = cart);
  }

  public addToCart(product: Product) {
   this.cartService.addOne(product);
  }

  public search($event: Event) {
  }
}
