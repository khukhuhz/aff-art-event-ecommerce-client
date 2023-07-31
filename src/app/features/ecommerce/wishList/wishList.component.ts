import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductResponse } from '@core/interfaces';
import { Observable } from 'rxjs';
import { EcommerceFacade } from '../ecommerce.facade';

@Component({
  selector: 'app-wishList',
  templateUrl: 'wishList.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WishListComponent {
  wishList$: Observable<ProductResponse[] | undefined> = this.ecommerceFacade.wishList$;

  constructor(private readonly ecommerceFacade: EcommerceFacade) {}

  deleteFromWishList(productId: number) {
    this.ecommerceFacade.deleteOneProductFromWishList(productId);
  }
}
