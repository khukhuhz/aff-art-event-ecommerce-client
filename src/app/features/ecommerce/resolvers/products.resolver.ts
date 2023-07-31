import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';

import { Status } from '@core/enums';

import { ProductsLoad, selectProductsResponseStatus } from '@features/ecommerce/store';

@Injectable()
export class ProductsResolver {
  constructor(private readonly store: Store) {}

  resolve(): Observable<boolean> {
    return this.store.pipe(
      select(selectProductsResponseStatus),
      tap((status) => {
        if (status === Status.INITIAL) {
          this.store.dispatch(ProductsLoad());
        }
      }),
      map(() => true),
    );
  }
}
