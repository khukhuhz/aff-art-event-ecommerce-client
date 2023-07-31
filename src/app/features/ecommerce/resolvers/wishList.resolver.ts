import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

import { Status } from '@core/enums';

import { selectWishListResponseStatus, WishListLoad } from '@features/ecommerce/store';
import { StorageService } from '../services';

@Injectable()
export class WishListResolver {
  constructor(private readonly store: Store, private readonly storageService: StorageService) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(selectWishListResponseStatus),
      tap((status) => {
        if (status === Status.INITIAL) {
          this.store.dispatch(WishListLoad({ token: this.storageService.token }));
        }
      }),
      map(() => true),
    );
  }
}
