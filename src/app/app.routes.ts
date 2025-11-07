import { Routes } from '@angular/router';
import {ProductsViewComponent} from "./presentation-pages/products-view/products-view.component";
import {HomePresentationComponent} from "./presentation-pages/home/home-presentation.component";

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
    path: 'products-view',
    component: ProductsViewComponent
  },
];
