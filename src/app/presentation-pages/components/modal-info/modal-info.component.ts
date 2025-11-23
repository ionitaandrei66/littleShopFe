import {Component, input, output} from '@angular/core';
import {NgIf} from "@angular/common";
import {Product} from "../../shared/interfaces/product.model";

@Component({
  selector: 'app-modal-info',
  imports: [
    NgIf
  ],
  templateUrl: './modal-info.component.html',
  standalone: true,
  styleUrl: './modal-info.component.scss'
})
export class ModalInfoComponent {
  public isOpenChange = output<boolean>();
  public shoppingProduct = input<Product>() ;

  public closeMenu(): void {
    this.isOpenChange.emit(false)
  }
}
