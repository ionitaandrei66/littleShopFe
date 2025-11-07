import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {NotificationService} from "../services/notification-service";



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
  constructor(private router: NotificationService) {
  }

  public toPresentation(): void {
    this.router.goToProductsView();
  }
}
