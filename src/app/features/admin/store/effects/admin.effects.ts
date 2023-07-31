import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { EcommerceApiResponse, ProductResponse } from '@core/interfaces';
import { AdminFacade } from '@features/admin/admin.facade';
import { AdminService } from '@features/admin/services';
import { ToastrService } from 'ngx-toastr';
import * as fromActions from '../actions';

@Injectable()
export class AdminEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly adminService: AdminService,
    private readonly toastrService: ToastrService,
    private readonly adminFacade: AdminFacade,
  ) {}

  productsLoad$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.ProductsLoad),
      switchMap(() =>
        this.adminService.getProducts().pipe(
          map((productsResponse: ProductResponse[]) =>
            fromActions.ProductsLoadComplete({ productsResponse }),
          ),
          catchError((error) => of(fromActions.ProductsLoadError({ error }))),
        ),
      ),
    ),
  );

  productLoad$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.ProductLoad),
      switchMap(({ productId }) =>
        this.adminService.getProduct(productId).pipe(
          map((productResponse: ProductResponse) =>
            fromActions.ProductLoadComplete({ productResponse }),
          ),
          catchError((error) => of(fromActions.ProductLoadError({ error }))),
        ),
      ),
    ),
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.CreateProduct),
      switchMap(({ productRequest, token }) =>
        this.adminService.createProduct(productRequest, token).pipe(
          map((productResponseCreate: ProductResponse) =>
            fromActions.CreateProductComplete({ productResponseCreate }),
          ),
          catchError((error) => of(fromActions.CreateProductError({ error }))),
        ),
      ),
    ),
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.UpdateProduct),
      switchMap(({ productRequest, token, productId }) =>
        this.adminService.updateProduct(productId, productRequest, token).pipe(
          map((productResponseUpdate: ProductResponse) =>
            fromActions.UpdateProductComplete({ productResponseUpdate }),
          ),
          catchError((error) => of(fromActions.UpdateProductError({ error }))),
        ),
      ),
    ),
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.DeleteProduct),
      switchMap(({ productId, token }) =>
        this.adminService.deleteProduct(productId, token).pipe(
          map((ecommerceApiRespProduct: EcommerceApiResponse) =>
            fromActions.DeleteProductComplete({ ecommerceApiRespProduct }),
          ),
          catchError((error) => of(fromActions.DeleteProductError({ error }))),
        ),
      ),
    ),
  );

  showErrorCreateProduct$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.CreateProductError),
        tap(({ error }) => {
          this.toastrService.error('', error.error.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  showSuccesCreateProduct$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.CreateProductComplete),
        tap(({ productResponseCreate }) => {
          this.toastrService.success('Création avec succes', productResponseCreate.productName, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  showErrorUpdateProduct$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.UpdateProductError),
        tap(({ error }) => {
          this.toastrService.error('', error.error.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  showSuccesUpdateProduct$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.UpdateProductComplete),
        tap(({ productResponseUpdate }) => {
          this.toastrService.success(
            'Modification avec succes',
            productResponseUpdate.productName,
            {
              timeOut: 5000,
            },
          );
        }),
      ),
    { dispatch: false },
  );

  showErrorDeleteProduct$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.DeleteProductError),
        tap(({ error }) => {
          this.toastrService.error('', error.error.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  showSuccesDeleteProduct$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.DeleteProductComplete),
        tap(({ ecommerceApiRespProduct }) => {
          this.toastrService.success('Suppression avec succes', ecommerceApiRespProduct.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  successOperations$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromActions.UpdateProductComplete,
          fromActions.CreateProductComplete,
          fromActions.DeleteProductComplete,
        ),
        tap(() => this.adminFacade.loadProduct()),
      ),
    { dispatch: false },
  );
}
