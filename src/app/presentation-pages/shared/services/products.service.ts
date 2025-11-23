import { Injectable } from '@angular/core';
import {ProductsServiceModel} from "../interfaces/products.service.model";
import {products} from "../../products";
import {Observable, of} from "rxjs";
import {Product} from "../interfaces/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductsService implements ProductsServiceModel<Product>{
  constructor() {}

  fetchData(): void {}

  getData(): Observable<Product[]> {
    return of(products);
  }


}
