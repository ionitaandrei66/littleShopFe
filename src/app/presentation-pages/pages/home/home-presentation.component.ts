import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NavigationService} from "../../shared/services/navigation.service";



@Component({
  selector: 'app-presentation-home',
    imports: [
        NgOptimizedImage
    ],
  standalone: true,
  templateUrl: './home-presentation.component.html',
  styleUrl: './home-presentation.component.scss'
})
export class HomePresentationComponent {
  constructor(private router: NavigationService) {
  }

  public toPresentation(): void {
    this.router.goToAllProductsView();
  }
}
