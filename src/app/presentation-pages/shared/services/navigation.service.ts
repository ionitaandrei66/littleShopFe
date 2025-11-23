import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  public goToProductsView(): void {
    void this.router.navigate(['/products-view']);
  }
  public goToAllProductsView(): void {
    void this.router.navigate(['/all-products']);
  }
}
