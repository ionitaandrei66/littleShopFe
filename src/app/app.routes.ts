import { Routes } from '@angular/router';
import {ProductsViewComponent} from "./presentation-pages/pages/products-view/products-view.component";
import {HomePresentationComponent} from "./presentation-pages/pages/home/home-presentation.component";
import {AllProductsComponent} from "./presentation-pages/pages/all-products/all-products.component";

export const routes: Routes = [
  {
    path: '',
    component: HomePresentationComponent
  },
  {
    path: 'home',
    component: HomePresentationComponent
  },
  {
    path: 'all-products',
    component: AllProductsComponent
  },
  {
    path: 'products-view',
    component: ProductsViewComponent
  },
];
