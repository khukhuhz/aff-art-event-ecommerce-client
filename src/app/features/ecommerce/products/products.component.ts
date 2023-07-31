import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductResponse } from '@core/interfaces';
import { Observable } from 'rxjs';
import { EcommerceFacade } from '../ecommerce.facade';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent {
  products$: Observable<ProductResponse[] | undefined> = this.ecommerceFacade.products$;

  constructor(private readonly ecommerceFacade: EcommerceFacade) {}

  manageWishList(productId: number) {
    this.ecommerceFacade.manageWishList(productId);
  }

  isMatchedProduct(productId: number): boolean {
    return this.ecommerceFacade.isFavouriteProduct(productId);
  }
}
