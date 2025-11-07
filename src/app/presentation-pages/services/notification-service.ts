import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  constructor(private router: Router) {}

  public goToProductsView(): void {
    void this.router.navigate(['/products-view']);
  }
}
