import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import {
  EcommerceApiResponse,
  ProductResponse,
  SignInResponse,
  SignUpResponse,
} from '@core/interfaces';
import { EcommerceFacade } from '@features/ecommerce/ecommerce.facade';
import { EcommerceService, StorageService } from '@features/ecommerce/services';
import { ToastrService } from 'ngx-toastr';
import * as fromActions from '../actions';

@Injectable()
export class EcommerceEffects {
  constructor(
    private readonly actions$: Actions,
    private readonly ecommerceService: EcommerceService,
    private readonly router: Router,
    private readonly toastrService: ToastrService,
    private readonly storageService: StorageService,
    private readonly ecommerceFacade: EcommerceFacade,
  ) {}

  signInLoad$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.SignInLoad),
      switchMap(({ signInRequest }) =>
        this.ecommerceService.signIn(signInRequest).pipe(
          map((signInResponse: SignInResponse) =>
            fromActions.SignInLoadComplete({ signInResponse }),
          ),
          catchError((error) => of(fromActions.SignInLoadError({ error }))),
        ),
      ),
    ),
  );

  signUpLoad$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.SignUpLoad),
      switchMap(({ signUpRequest }) =>
        this.ecommerceService.signUp(signUpRequest).pipe(
          map((signUpResponse: SignUpResponse) =>
            fromActions.SignUpLoadComplete({ signUpResponse }),
          ),
          catchError((error) => of(fromActions.SignUpLoadError({ error }))),
        ),
      ),
    ),
  );

  logOutLoad$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.LogOutLoad),
      switchMap(({ token }) =>
        this.ecommerceService.logout(token).pipe(
          map((ecommerceApiResponse: EcommerceApiResponse) =>
            fromActions.LogOutLoadComplete({ ecommerceApiResponse }),
          ),
          catchError((error) => of(fromActions.LogOutLoadError({ error }))),
        ),
      ),
    ),
  );

  showErrorSignUp$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.SignUpLoadError),
        tap(({ error }) => {
          this.toastrService.error('', error.error.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  showSuccesSignUp$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.SignUpLoadComplete),
        tap(({ signUpResponse }) => {
          this.toastrService.info('Inscription avec succes', signUpResponse.email, {
            timeOut: 5000,
          });
          this.router.navigate(['/login']);
        }),
      ),
    { dispatch: false },
  );

  succesSignIn$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.SignInLoadComplete),
        tap(({ signInResponse }) => {
          this.router.navigate(['/products']);
          this.storageService.set('token', signInResponse.token);
          this.storageService.set('role', signInResponse.role);
          this.storageService.set('connected', 'true');
          this.ecommerceFacade.loadWishList();
        }),
      ),
    { dispatch: false },
  );

  errorSignIn$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.SignInLoadError),
        tap(({ error }) => {
          this.toastrService.error('', error.error.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  productsLoad$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.ProductsLoad),
      switchMap(() =>
        this.ecommerceService.getProducts().pipe(
          map((productsResponse: ProductResponse[]) =>
            fromActions.ProductsLoadComplete({ productsResponse }),
          ),
          catchError((error) => of(fromActions.ProductsLoadError({ error }))),
        ),
      ),
    ),
  );

  showErrorLogout$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.LogOutLoadError),
        tap(({ error }) => {
          this.toastrService.error('', error.error.message, {
            timeOut: 5000,
          });
        }),
      ),
    { dispatch: false },
  );

  showSuccesLogout$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromActions.LogOutLoadComplete),
        tap(({ ecommerceApiResponse }) => {
          this.storageService.clear();
          this.toastrService.info('Deconnexion avec succes', ecommerceApiResponse.message, {
            timeOut: 5000,
          });
          this.router.navigate(['/login']);
        }),
      ),
    { dispatch: false },
  );

  getWishList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.WishListLoad),
      switchMap(({ token }) =>
        this.ecommerceService.getWishList(token).pipe(
          map((wishListProducts: ProductResponse[]) =>
            fromActions.WishListLoadComplete({ wishListProducts }),
          ),
          catchError((error) => of(fromActions.WishListLoadError({ error }))),
        ),
      ),
    ),
  );

  addProductToWishList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.AddToWishListLoad),
      switchMap(({ wishListRequest, token }) =>
        this.ecommerceService.addToWishList(wishListRequest, token).pipe(
          map((addToWishListResponse: EcommerceApiResponse) =>
            fromActions.AddToWishListLoadComplete({ addToWishListResponse }),
          ),
          catchError((error) => of(fromActions.AddToWishListLoadError({ error }))),
        ),
      ),
    ),
  );

  deleteFromWishList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.DeleteFromWishListLoad),
      switchMap(({ productId, token }) =>
        this.ecommerceService.deleteOneProductFromWishList(productId, token).pipe(
          map((deleteFromWishListResponse: EcommerceApiResponse) =>
            fromActions.DeleteFromWishListLoadComplete({ deleteFromWishListResponse }),
          ),
          catchError((error) => of(fromActions.DeleteFromWishListLoadError({ error }))),
        ),
      ),
    ),
  );

  deleteAllFromWishList$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(fromActions.DeleteAllFromWishListLoad),
      switchMap(({ token }) =>
        this.ecommerceService.deleteAllProductsFromWishList(token).pipe(
          map((deleteAllFromWishListResponse: EcommerceApiResponse) =>
            fromActions.DeleteAllFromWishListLoadComplete({ deleteAllFromWishListResponse }),
          ),
          catchError((error) => of(fromActions.DeleteAllFromWishListLoadError({ error }))),
        ),
      ),
    ),
  );

  loadWishList$: Observable<Action> = createEffect(
    () =>
      this.actions$.pipe(
        ofType(
          fromActions.ProductsLoadComplete,
          fromActions.AddToWishListLoadComplete,
          fromActions.DeleteFromWishListLoadComplete,
          fromActions.DeleteAllFromWishListLoadComplete,
        ),
        tap(() => this.ecommerceFacade.loadWishList()),
      ),
    { dispatch: false },
  );
}
